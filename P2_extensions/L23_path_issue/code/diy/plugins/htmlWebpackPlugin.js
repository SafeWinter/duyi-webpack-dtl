const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'html/index.html',
  title: 'S17L23 - Path Issue in Webpack | DIY',
  heading: 'S17L23 - Path Issue in Webpack (DIY)',
  favicon: './public/favicon.ico',
});

module.exports = {
  htmlWebpackPlugin
}