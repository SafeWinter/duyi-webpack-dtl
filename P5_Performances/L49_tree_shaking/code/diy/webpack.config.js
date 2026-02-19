const { cleanWebpackPlugin, htmlWebpackPlugin } = require('./plugins');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].js'
  },
  plugins: [
    cleanWebpackPlugin,
    htmlWebpackPlugin,
    new MiniCssExtractPlugin({
      filename: '[name].[hash:5].css'
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