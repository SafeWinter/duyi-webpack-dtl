const CopyWebpackPlugin = require('copy-webpack-plugin');

const copyWebpackPlugin = new CopyWebpackPlugin([
  {from: './public', to: './'}
]);

module.exports = {
  copyWebpackPlugin
}