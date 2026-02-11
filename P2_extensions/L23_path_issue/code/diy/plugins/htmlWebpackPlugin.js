const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'html/index.html',
  favicon: './public/favicon.ico',
  templateParameters: {
    title: 'S17L23 - Path Issue in Webpack | DIY',  // <%= title %>
    heading: 'S17L23 - Path Issue in Webpack (DIY)',  // <%= heading %>
  }
});

module.exports = {
  htmlWebpackPlugin
}