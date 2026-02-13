const HtmlWebpackPlugin = require('html-webpack-plugin');

const templateParameters = {
  title: 'S17L32 - Less in Webpack | DIY',
  heading: 'S17L32 - Less in Webpack (DIY)'
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  favicon: './public/favicon.ico',
  templateParameters,
});

module.exports = {
  htmlWebpackPlugin
}