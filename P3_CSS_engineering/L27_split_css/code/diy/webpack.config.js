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
      { test: /\.css$/, use: ['css-loader'] },
      { test: /\.(png)|(jp?g)|(gif)$/, use: ['file-loader'] },
    ]
  },
  watch: true,
}