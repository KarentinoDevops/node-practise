import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    rules: {
      "prefer-const": "warn",
      "no-constant-binary-expression": "error",

      // Formatting rules
      indent: ["error", 2],
      quotes: ["error", "single"],
      semi: ["error", "always"],
    },
  },
]);