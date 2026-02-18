const HtmlWebpackPlugin = require('html-webpack-plugin');

const templateParameters = {
  title: 'S17L44 - Loader Optimization | DIY',
  heading: 'S17L44 - Loader Optimization (DIY)'
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  favicon: './public/favicon.ico',
  templateParameters
});

module.exports = {
  htmlWebpackPlugin
}