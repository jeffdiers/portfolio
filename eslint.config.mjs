// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import storybook from "eslint-plugin-storybook";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Ignore scripts folder
  {
    ignores: ["scripts/**", "storybook-static"],
  },

  // Next.js core web vitals
  ...nextCoreWebVitals,

  // Next.js TypeScript rules
  ...nextTypescript,

  ...storybook.configs["flat/recommended"],

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
