const HtmlWebpackPlugin = require('html-webpack-plugin');

const templateParameters = {
  title: 'S17L43 - Reduce Module Resolve | DIY',
  heading: 'S17L43 - Reduce Module Resolve (DIY)'
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  favicon: './public/favicon.ico',
  templateParameters
});

module.exports = {
  htmlWebpackPlugin
}