const { htmlPlugin } = require('./htmlWebpackPlugin.js');
const { cleanPlugin } = require('./cleanWebpackPlugin.js');
const { copyPlugin } = require('./copyWebpackPlugin.js');

module.exports = {
  htmlPlugin,
  cleanPlugin,
  copyPlugin
}