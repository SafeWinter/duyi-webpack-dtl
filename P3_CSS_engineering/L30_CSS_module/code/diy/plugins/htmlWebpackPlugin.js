const HtmlWebpackPlugin = require('html-webpack-plugin');

const templateParameters = {
  title: 'S17L30 - CSS Module in Action | DIY',
  heading: 'S17L30 - CSS Module in Action (DIY)'
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  favicon: './public/favicon.ico',
  templateParameters,
});

module.exports = {
  htmlWebpackPlugin
}