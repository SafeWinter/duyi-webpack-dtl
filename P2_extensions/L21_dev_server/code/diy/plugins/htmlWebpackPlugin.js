const HtmlWebpackPlugin = require('html-webpack-plugin');

const templateParameters = {
  favicon: './favicon.ico',
  title: 'S17L21 - Webpack Dev Server | DIY',
  heading: 'S17L21 - Webpack Dev Server (DIY)'
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  templateParameters,
  template: './public/index.html',
  filename: 'portal.html',
  chunks: ['portal']
});

module.exports = {
  htmlWebpackPlugin
}