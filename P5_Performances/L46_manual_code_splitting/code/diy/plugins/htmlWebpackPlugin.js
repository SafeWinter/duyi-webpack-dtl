const HtmlWebpackPlugin = require('html-webpack-plugin');

const templateParameters = {
  title: 'S17L46 - Manual Bundle Split | DIY',
  heading: 'S17L46 - Manual Bundle Split (DIY)'
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  favicon: './public/favicon.ico',
  templateParameters
});

module.exports = {
  htmlWebpackPlugin
}