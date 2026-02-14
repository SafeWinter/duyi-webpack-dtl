const HtmlWepackPlugin = require('html-webpack-plugin');

const templateParameters = {
  title: 'S17L34 - PostCSS in Webpack | DIY',
  heading: 'S17L34 - PostCSS in Webpack (DIY)'
};

const htmlPlugin = new HtmlWepackPlugin({
  template: './public/index.html',
  favicon: './public/favicon.ico',
  templateParameters
});

module.exports = {
  htmlPlugin
};