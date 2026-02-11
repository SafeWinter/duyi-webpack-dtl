const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  favicon: './public/favicon.ico',
  templateParameters: {
    title: 'S17L24 - Webpack Built-in Plugins | DIY',  // <%= title %>
    heading: 'S17L24 - Webpack Built-in Plugins (DIY)',  // <%= heading %>
  }
});

module.exports = {
  htmlWebpackPlugin
}