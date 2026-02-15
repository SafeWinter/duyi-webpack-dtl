const HtmlWebpackPlugin = require('html-webpack-plugin');

const templateParameters = {
  title: 'S17L35 - CSS Extraction | DIY',
  heading: 'S17L35 - CSS Extraction (DIY)'
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  favicon: './public/favicon.ico',
  templateParameters,
});

module.exports = {
  htmlWebpackPlugin
}