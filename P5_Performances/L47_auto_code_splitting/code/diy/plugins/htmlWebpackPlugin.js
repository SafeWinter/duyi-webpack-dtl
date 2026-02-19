const HtmlWebpackPlugin = require('html-webpack-plugin');

const templateParameters = {
  title: 'S17L47 - Auto Chunk Splitting | DIY',
  heading: 'S17L47 - Auto Chunk Splitting (DIY)'
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  favicon: './public/favicon.ico',
  templateParameters
});

module.exports = {
  htmlWebpackPlugin
}