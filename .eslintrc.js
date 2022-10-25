module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "prettier",
    "plugin:react/recommended",
    "airbnb",
    "next/core-web-vitals",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-closing-bracket-location": 0,
    "implicit-arrow-linebreak": 0,
    "object-curly-newline": 0,
    "react/jsx-props-no-spreading": 0,
  },
};
