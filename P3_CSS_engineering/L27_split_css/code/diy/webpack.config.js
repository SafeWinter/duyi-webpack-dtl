const { htmlWebpackPlugin, copyWebpackPlugin, cleanWebpackPlugin } = require('./plugins');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[hash:5].js'
  },
  plugins: [
    htmlWebpackPlugin,
    copyWebpackPlugin,
    cleanWebpackPlugin
  ]
}