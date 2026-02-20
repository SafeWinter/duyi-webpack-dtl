const { cleanWebpackPlugin, htmlWebpackPlugin } = require('./plugins');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].[hash:5].js',
  },
  plugins: [
    cleanWebpackPlugin,
    htmlWebpackPlugin,
    new CompressionPlugin({
      test: /\.js/i,
      minRatio: 0.6 // 0.8 by default
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  stats: {
    builtAt: false,
    modules: false,
  },
}