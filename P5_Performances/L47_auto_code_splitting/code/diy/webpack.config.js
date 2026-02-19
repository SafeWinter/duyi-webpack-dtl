const { htmlWebpackPlugin, copyWebpackPlugin, cleanWebpackPlugin } = require('./plugins');

module.exports = {
  mode: 'development',
  entry: {
    page1: './src/page1',
    page2: './src/page2'
  },
  output: {
    filename: '[name].[hash:5].js'
  },
  plugins: [
    htmlWebpackPlugin,
    copyWebpackPlugin,
    cleanWebpackPlugin,
  ],
  stats: {
    builtAt: false,
    modules: false,
  },
}