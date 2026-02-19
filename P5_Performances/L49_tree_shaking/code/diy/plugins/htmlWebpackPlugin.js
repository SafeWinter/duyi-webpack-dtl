const HtmlWebpackPlugin = require('html-webpack-plugin');

const templateParameters = {
  title: 'S17L49 - Tree Shaking | DIY',
  heading: 'S17L49 - Tree Shaking (DIY)'
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  favicon: './public/favicon.ico',
  template: './public/index.html',
  templateParameters,
});

module.exports = {
  htmlWebpackPlugin
}