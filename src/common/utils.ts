import {
  camelCase,
  isArray,
  isObject,
  isString,
  snakeCase,
  transform,
} from "lodash";
import showToast from "../components/showToast";
import { message } from "antd";

export const camelCasify = obj =>
  isString(obj)
    ? obj
    : transform(obj, (acc: any, value, key: string, target) => {
        const camelKey = isArray(target) ? key : camelCase(key);

        acc[camelKey] = isObject(value) ? camelCasify(value) : value;
      });

export const snakeCasify = obj =>
  isString(obj)
    ? obj
    : transform(obj, (acc: any, value, key: string, target) => {
        const camelKey = isArray(target) ? key : snakeCase(key);

        acc[camelKey] = isObject(value) ? snakeCasify(value) : value;
      });

export const toast = {
  success: (msg?: string, duration?: number) =>
    (msg && msg.length && showToast("success", msg, duration)) || null,
  warn: (msg?: string, duration?: number) =>
    (msg && msg.length && showToast("warn", msg, duration)) || null,
  info: (msg?: string, duration?: number) =>
    (msg && msg.length && showToast("info", msg, duration)) || null,
  error: (msg?: string, duration?: number) =>
    (msg && msg.length && showToast("error", msg, duration)) || null,
  loading: message.loading,
};
