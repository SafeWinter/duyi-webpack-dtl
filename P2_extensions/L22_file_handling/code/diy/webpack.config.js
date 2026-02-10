const {cleanWebpackPlugin, htmlWebpackPlugin, copyWebpackPlugin} = require('./plugins');

module.exports = {
  mode: "development",
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: '[name].[hash:5].js',
  },
  plugins: [
    cleanWebpackPlugin,
    copyWebpackPlugin,
    htmlWebpackPlugin,
  ],
  module: {
    rules: [
      { test: /\.(png)|(gif)|(jpg)$/, use: [
        {
          loader: 'url-loader',
          options: {
            limit: 50 * 1024, // 50Kb
            name: '[hash:5].[ext]'
          }
        }
      ] }
    ]
  }
};
