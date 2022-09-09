module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "standard",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    semi: ["warn", "always"],
    quotes: ["warn", "double"],
    "comma-dangle": ["warn", "always-multiline"],
  },
};
