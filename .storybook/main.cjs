const path = require('path')
module.exports = {
  core: {
    builder: "storybook-builder-vite",
  },
  async viteFinal(config, { configType }) {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');
    // console.log('configType', configType)
    return config;
  },
  "stories": [
    "../src/styles/index.scss",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    "@storybook/addon-postcss"
  ],
  "framework": "@storybook/vue3",
}
