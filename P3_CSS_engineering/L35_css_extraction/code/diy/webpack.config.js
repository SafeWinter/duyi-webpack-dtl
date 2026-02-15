const path = require('node:path');
const { htmlWebpackPlugin, copyWebpackPlugin, cleanWebpackPlugin } = require('./plugins');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {loader: extractLoader} = MiniCssExtractPlugin;
console.log('extractLoader', extractLoader);

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[hash:5].js'
  },
  plugins: [
    htmlWebpackPlugin,
    copyWebpackPlugin,
    cleanWebpackPlugin,
    new MiniCssExtractPlugin({
      filename: '[name].[hash:5].css'
    }),
  ],
  devtool: 'source-map',
  stats: {
    builtAt: false,
    modules: false,
  },
  module: {
    rules: [
      { test: /\.css$/i, use: [extractLoader, 'css-loader?modules']},
    ]
  },
  watch: true,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
}