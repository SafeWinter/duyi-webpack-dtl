const HtmlWebpackPlugin = require('html-webpack-plugin');

const templateParameters = {
  title: 'S17L52 - Webpack Bundle Analyzer | DIY',
  heading: 'S17L52 - Webpack Bundle Analyzer (DIY)'
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  favicon: './public/favicon.ico',
  template: './public/index.html',
  templateParameters,
});

module.exports = {
  htmlWebpackPlugin
}