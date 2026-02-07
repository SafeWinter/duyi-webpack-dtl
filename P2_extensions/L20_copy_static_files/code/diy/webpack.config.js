const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const templateParameters = {
  favicon: './favicon.ico',
  title: 'S17L20 - Copy Webpack Plugin | DIY',
  heading: 'S17L20 - Copy Webpack Plugin (DIY)'
};

module.exports = {
  mode: "development",
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: '[name].[hash:5].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      templateParameters
    }),
    new CopyPlugin([
      { from: './public', to: './' }
    ]),
  ]
};
