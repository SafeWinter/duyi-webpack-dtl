const HtmlWebpackPlugin = require('html-webpack-plugin');

const templateParameters = {
  title: 'S17L47 - Auto Chunk Splitting | DIY',
  heading: 'S17L47 - Auto Chunk Splitting (DIY)'
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  favicon: './public/favicon.ico',
  template: './public/index.html',
  templateParameters,
});

module.exports = {
  htmlWebpackPlugin
}