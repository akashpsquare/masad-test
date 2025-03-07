// eslint.config.js
import js from "@eslint/js";
import react from "eslint-plugin-react";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import jsdoc from "eslint-plugin-jsdoc";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  react.configs.recommended,
  ts.configs.recommended,
  prettier, // Ensures ESLint doesn't conflict with Prettier
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react,
      "@typescript-eslint": ts,
      jsdoc,
    },
    rules: {
      "react/prop-types": "off", // If using TypeScript, PropTypes aren't needed
      "@typescript-eslint/explicit-module-boundary-types": "error", // Force defining return types
      "jsdoc/require-jsdoc": [
        "warn",
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
          },
        },
      ],
      "jsdoc/require-param": "error", // Ensure all function parameters are documented
      "jsdoc/require-returns": "error", // Ensure return values are documented
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],
    },
  },
];
