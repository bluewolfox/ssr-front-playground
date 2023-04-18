/* eslint-disable @typescript-eslint/no-var-requires */
const { override, disableEsLint, overrideDevServer } = require('customize-cra');

module.exports = {
  webpack: override(disableEsLint()),
  devServer: overrideDevServer((config) => {
    if (process.env.NODE_ENV === 'production') config.devtool = false;
    return config;
  }),
};
