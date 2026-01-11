import type { StorybookConfig } from "@storybook/nextjs";

const config = {
  stories: [
    "../components/stories/**/*.mdx",
    "../components/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: ["@storybook/addon-links", "@storybook/addon-docs"],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
} satisfies StorybookConfig;

export default config;
