const typeTemplate = "{{label}} is not a valid {{type}}";

const validation = {
  required: "{{label}} is required",
  format: "Invalid format",
  whitespace: "{{label}} is required",
  string: {
    len: "{{label}} must have {{len}} characters",
    min: "{{label}} must have at least {{min}} characters",
    max: "{{label}} must have at most {{max}} characters",
    range: "{{label}} must have {{min}} to {{max}} characters",
  },
  date: {
    format: "{{label}} is not valid date time format",
    invalid: "{{label}} is not valid date",
  },
  file: {
    max: "File size can be at most {{max}}",
    extension: "Invalid file format",
  },
  number: {
    type: "{{label}} must be a number",
    len: "{{label}} must be ${len} digit long",
    min: "{{label}} must be at least {{min}}",
    max: "{{label}} must be at most {{max}}",
    range: "{{label}} must be from {{min}} to {{max}}",
  },
  type: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate,
  },
  same: "{{label}} must match {{object}}",
};

const antd = {};
for (const key in validation) {
  if (typeof validation[key] == "string") {
    antd[key] = validation[key].replaceAll("{{", "${").replaceAll("}}", "}");
  } else {
    antd[key] = {};
    for (const subKey in validation[key]) {
      antd[key][subKey] = validation[key][subKey]
        .replaceAll("{{", "${")
        .replaceAll("}}", "}");
    }
  }
}
validation.antd = antd;

export default validation;
