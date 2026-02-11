const CopyPlugin = require('copy-webpack-plugin');

const copyWebpackPlugin = new CopyPlugin([
  {from: './public/css', to: './css'},
  {from: './public/img', to: './img'}
]);

module.exports = {
  copyWebpackPlugin
}