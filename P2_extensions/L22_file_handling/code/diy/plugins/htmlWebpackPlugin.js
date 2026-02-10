const HtmlWebpackPlugin = require('html-webpack-plugin');

const templateParameters = {
  favicon: './favicon.ico',
  title: 'S17L22 - File Handling in Webpack | DIY',
  heading: 'S17L22 - File Handling in Webpack (DIY)'
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  templateParameters,
  template: './public/index.html',
});

module.exports = {
  htmlWebpackPlugin
}