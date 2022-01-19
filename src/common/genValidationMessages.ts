import i18next from "i18next";

const genValidationMessages = (locale = "en") => {
  const validation = require(`src/locales/${locale}/validation`);
  const result = {};
  for (const key in validation.antd) {
    if (typeof validation.antd[key] == "string") {
      result[key] = i18next
        .t("validation:antd." + key)
        .replaceAll("{{", "${")
        .replaceAll("}}", "}");
    } else {
      result[key] = {};
      for (const subKey in validation.antd[key]) {
        result[key][subKey] = i18next
          .t("validation:antd." + key + "." + subKey)
          .replaceAll("{{", "${")
          .replaceAll("}}", "}");
      }
    }
  }

  return result;
};

export default genValidationMessages;
