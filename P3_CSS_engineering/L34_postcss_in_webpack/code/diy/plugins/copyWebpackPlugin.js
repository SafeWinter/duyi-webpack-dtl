const CopyWebpackPlugin = require('copy-webpack-plugin');

const copyPlugin = new CopyWebpackPlugin([
  {from: './public', to: './' },
]);

module.exports = {
  copyPlugin
}