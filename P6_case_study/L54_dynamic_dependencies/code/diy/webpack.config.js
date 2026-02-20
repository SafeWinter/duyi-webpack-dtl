const { cleanWebpackPlugin, htmlWebpackPlugin } = require('./plugins');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  plugins: [
    cleanWebpackPlugin,
    htmlWebpackPlugin
  ],
  stats: {
    builtAt: false,
    modules: false,
  },
}