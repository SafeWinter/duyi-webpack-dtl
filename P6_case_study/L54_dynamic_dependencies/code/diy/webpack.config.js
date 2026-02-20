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
  module: {
    rules: [
      {test: /\.css$/i, use: ['style-loader', 'css-loader']}
    ]
  },
}