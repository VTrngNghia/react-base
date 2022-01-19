// eslint-disable-next-line no-undef
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "settings": {
    react: {
      version: "latest",
    },
  },
  "rules": {
    "eqeqeq": "off",
    "react-hooks/rules-of-hooks": "error", // Check rules of Hooks
    "react-hooks/exhaustive-deps": "error",
    "eslint-comments/no-unlimited-disable": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
  }
}
