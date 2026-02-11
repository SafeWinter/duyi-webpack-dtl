const { cleanWebpackPlugin, listHtmlPlugin, detailHtmlPlugin, copyWebpackPlugin } = require('./plugins');

module.exports = {
  mode: 'production',
  devtool: "none",
  plugins: [
    cleanWebpackPlugin,
    listHtmlPlugin,
    detailHtmlPlugin,
    copyWebpackPlugin
  ],
}