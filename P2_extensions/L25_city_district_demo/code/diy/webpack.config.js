const { cleanWebpackPlugin, htmlWebpackPlugin } = require("./plugins");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: './src/index.js',
  output: {
    filename: "scripts/[name].[hash:5].js",
  },
  plugins: [
    cleanWebpackPlugin,
    htmlWebpackPlugin
  ],
  devServer: {
    open: true,
    stats: {
      modules: false,
      builtAt: false,
      colors: true
    }
  },
};
