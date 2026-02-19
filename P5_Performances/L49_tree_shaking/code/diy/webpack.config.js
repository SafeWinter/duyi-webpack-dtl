const { cleanWebpackPlugin, htmlWebpackPlugin } = require('./plugins');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgePlugin = require('purgecss-webpack-plugin');

const path = require('node:path');
const src = path.resolve(__dirname, 'src');
const htmlPath = path.resolve(__dirname, 'public/index.html');
const { sync } = require('glob-all');
const paths = sync([`${src}**/*.js`, htmlPath]);
console.log(paths);

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
  },
  plugins: [
    cleanWebpackPlugin,
    htmlWebpackPlugin,
    new MiniCssExtractPlugin({
      filename: '[name].[hash:5].css'
    }),
    new PurgePlugin({
      paths
    })
  ],
  stats: {
    builtAt: false,
    modules: false,
  },
  module: {
    rules: [
      {test: /\.css$/, use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
      ]}
    ]
  },
}