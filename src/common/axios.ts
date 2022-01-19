import axiosBase, { AxiosInstance } from "axios";
import config from "src/config/config";
import { isEmpty } from "lodash";
import { camelCasify, snakeCasify, toast } from "./utils/utils";
import { FORBIDDEN, WAIT_CONTENT } from "../config/httpCodes";
import i18next from "i18next";

const axios: AxiosInstance = axiosBase.create({
  baseURL: config.baseUrl,
  timeout: 15000,
  headers: {},
});

axios.interceptors.request.use(
  config => {
    if (!isEmpty(config.data)) {
      config.data = snakeCasify(config.data);
    }

    if (!isEmpty(config.params)) {
      config.params = snakeCasify(config.params);
    }

    console.debug(
      config.method?.toUpperCase(),
      (config.baseURL || "") + config.url,
      config,
    );
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

axios.interceptors.response.use(
  async response => {
    response.data = camelCasify(response.data);
    if (response.status == WAIT_CONTENT) {
      const request = response.config;
      return await handleWaitApiContent(request);
    }
    console.debug(
      response.status,
      response.config.method?.toUpperCase(),
      (response.config.baseURL || "") + response.config.url,
      response.data,
    );
    return response.data;
  },
  error => {
    if (!isEmpty(error.response?.data)) {
      error.response.data = camelCasify(error.response.data);
    } else {
      error.response = camelCasify(error.response);
    }

    console.debug(
      error.response?.status,
      error.response?.config?.method?.toUpperCase(),
      error.response?.config?.url,
      error,
      error.response?.data || error.response,
    );

    // Timeout
    if (error.code == "ECONNABORTED") {
      toast.error(i18next.t("timeout"));
      return { success: false };
    }

    // Couldn't connect to server
    if (error.message == "Network Error") {
      toast.error(i18next.t("networkError"));
      return { success: false };
    }

    if (!error.response) {
      toast.error(i18next.t("noResponseFromServer"));
      return { success: false };
    }

    switch (error.response.status) {
      case FORBIDDEN:
        toast.error(error.response?.data?.message || i18next.t("forbidden"));
        return { success: false };
      default:
        return error.response?.data || { success: false };
    }
  },
);

const handleWaitApiContent = request => {
  return new Promise(resolve => {
    return setTimeout(() => {
      resolve(axios(request));
    }, 5000);
  });
};

export default axios;
