
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        require: "readonly",
        module: "readonly",
        console: "readonly",
        process: "readonly"
      }
    },
    rules: {
      semi: ["error", "always"],
      "no-undef": "error",
      "no-unused-vars": "error"
    }
  }
];
