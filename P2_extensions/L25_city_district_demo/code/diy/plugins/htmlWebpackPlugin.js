const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  favicon: './public/favicon.ico',
  templateParameters: {
    title: 'S17L25 - Cascading Area | DIY',
    heading: 'S17L25 - Cascading Area (DIY)'
  }  
});

module.exports = {
  htmlWebpackPlugin
}