import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Ignore scripts folder
  {
    ignores: ["scripts/**"],
  },

  // Next.js core web vitals
  ...nextCoreWebVitals,

  // Next.js TypeScript rules
  ...nextTypescript,

  // Turn off formatting rules that conflict with Prettier
  prettier,

  // Enable prettier plugin + errors
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
]);
