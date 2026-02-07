const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('node:path');

const templateParameters = {
  favicon: '../public/favicon.ico',
  title: 'S17L19 - HTML Webpack Plugin | DIY',
  heading: 'S17L19 - HTML Webpack Plugin (DIY)'
};

module.exports = {
  mode: "development",
  devtool: 'source-map',
  entry: {
    home: './src/index.js',
    about: './src/about.js'
  },
  output: {
    filename: '[name].[hash:5].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['home'],
      filename: 'home.html',
      templateParameters
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['about'],
      filename: 'about.html',
      templateParameters
    }),

  ]
};
