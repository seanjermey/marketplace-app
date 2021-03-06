const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        auth: `auth@${domain}/products/latest/remoteEntry.js`,
        booking: `booking@${domain}/projects/latest/remoteEntry.js`,
        dashboard: `dashboard@${domain}/services/latest/remoteEntry.js`,
        marketing: `marketing@${domain}/tools/latest/remoteEntry.js`,
        support: `support@${domain}/home/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
