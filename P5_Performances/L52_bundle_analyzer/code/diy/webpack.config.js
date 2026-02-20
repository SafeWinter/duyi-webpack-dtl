const { cleanWebpackPlugin, htmlWebpackPlugin } = require('./plugins');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
  },
  plugins: [
    cleanWebpackPlugin,
    htmlWebpackPlugin,
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ],
  stats: {
    builtAt: false,
    modules: false,
  },
}