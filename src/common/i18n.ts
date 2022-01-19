import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enLocale from "./locales/en";

const resources = {
  en: enLocale,
};

i18next.use(initReactI18next).init(
  {
    defaultNS: "common",
    resources,
    lng: "en",
    fallbackLng: "en",
    lowerCaseLng: true,
    cleanCode: true,
    nonExplicitSupportedLngs: true,
  },
  (err, t) => {
    t("clientError");
  },
);

export default i18next;
