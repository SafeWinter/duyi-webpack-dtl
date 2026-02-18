const { htmlWebpackPlugin, copyWebpackPlugin, cleanWebpackPlugin } = require('./plugins');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
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
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /lodash/,
        use: ['babel-loader']
      }
    ],
  },
}