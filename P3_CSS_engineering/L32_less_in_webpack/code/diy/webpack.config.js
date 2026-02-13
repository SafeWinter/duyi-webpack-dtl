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
  ],
  devtool: 'source-map',
  stats: {
    builtAt: false,
    modules: false,
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader?modules']},
      { test: /\.less$/i, use: ['style-loader', 'css-loader?modules', 'less-loader']},
    ]
  },
  watch: true,
}