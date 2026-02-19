const HtmlWebpackPlugin = require('html-webpack-plugin');

const templateParameters = {
  title: 'S17L47 - Auto Chunk Splitting | DIY',
  heading: 'S17L47 - Auto Chunk Splitting (DIY)'
};

const htmlWebpackPlugin1 = new HtmlWebpackPlugin({
  template: './public/index.html',
  favicon: './public/favicon.ico',
  templateParameters,
  filename: 'page1.html',
  chunks: ['page1', 'vendors~page1~page2']
});

const htmlWebpackPlugin2 = new HtmlWebpackPlugin({
  template: './public/index.html',
  favicon: './public/favicon.ico',
  templateParameters,
  filename: 'page2.html',
  chunks: ['page2', 'vendors~page1~page2']
});
module.exports = {
  htmlWebpackPlugin1,
  htmlWebpackPlugin2
}