const { cleanWebpackPlugin, htmlWebpackPlugin } = require('./plugins');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
  },
  plugins: [
    cleanWebpackPlugin,
    htmlWebpackPlugin,
  ],
  stats: {
    builtAt: false,
    modules: false,
  },
}