const { cleanWebpackPlugin, htmlWebpackPlugin } = require("./plugins");
const { DefinePlugin, BannerPlugin, ProvidePlugin } = require("webpack");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    filename: "[name].[hash:5].js",
  },
  plugins: [
    cleanWebpackPlugin,
    htmlWebpackPlugin,
    new DefinePlugin({
      PI: `Math.PI`, // PI = Math.PI
      VERSION: `"1.0.0"`, // VERSION = "1.0.0"
      DOMAIN: JSON.stringify("duyi.com"),
    }),
    new BannerPlugin({
      banner: `
  hash:[hash]
  chunkhash:[chunkhash]
  name:[name]
  author:yuanjin
  corporation:duyi
  `,
    }),
    new ProvidePlugin({
      $: "jquery",
      _: "lodash",
    }),
  ],
};
