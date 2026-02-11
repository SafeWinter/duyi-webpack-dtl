const { listHtmlPlugin, detailHtmlPlugin } = require('./htmlWebpackPlugin');
const { cleanWebpackPlugin } = require('./cleanWebpackPlugin');
const { copyWebpackPlugin } = require('./copyWebpackPlugin');

module.exports = {
  cleanWebpackPlugin,
  detailHtmlPlugin,
  listHtmlPlugin,
  copyWebpackPlugin
};
