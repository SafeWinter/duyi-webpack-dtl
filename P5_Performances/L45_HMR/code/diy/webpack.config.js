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
  devServer: {
    open: true,
    hot: true
  },
  module: {
    rules: [
      {test: /\.css/i, exclude: /node_modules/, use:['style-loader', 'css-loader?modules']}
    ]
  },
}