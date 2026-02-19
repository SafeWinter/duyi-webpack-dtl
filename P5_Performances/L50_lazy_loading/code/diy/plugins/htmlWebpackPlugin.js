const HtmlWebpackPlugin = require('html-webpack-plugin');

const templateParameters = {
  title: 'S17L50 - Lazy Loading | DIY',
  heading: 'S17L50 - Lazy Loading (DIY)'
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  favicon: './public/favicon.ico',
  template: './public/index.html',
  templateParameters,
});

module.exports = {
  htmlWebpackPlugin
}