const HtmlWebpackPlugin = require('html-webpack-plugin');

const templateParameters = {
  title: 'S17L54 - Webpack Dynamic Dependencies | DIY',
  heading: 'S17L54 - Webpack Dynamic Dependencies (DIY)'
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  favicon: './public/favicon.ico',
  template: './public/index.html',
  templateParameters,
});

module.exports = {
  htmlWebpackPlugin
}