const HtmlWebpackPlugin = require('html-webpack-plugin');

const templateParameters = {
  title: 'S17L41 - Pipeline Operator via Babel | DIY',
  heading: 'S17L41 - Pipeline Operator via Babel (DIY)'
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  favicon: './public/favicon.ico',
  templateParameters
});

module.exports = {
  htmlWebpackPlugin
}