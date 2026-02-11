const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'html/index.html',
  favicon: './public/favicon.ico',
  title: 'S17L23 - Path Issue in Webpack | DIY',
  templateParameters: {
    heading: 'S17L23 - Path Issue in Webpack (DIY)',
  }
});

module.exports = {
  htmlWebpackPlugin
}