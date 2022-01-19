/* eslint-disable no-undef */
const CracoLessPlugin = require("craco-less");
const colors = require("./src/config/colors.json");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  style: {
    postcssOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer")]
    }
  }
};
