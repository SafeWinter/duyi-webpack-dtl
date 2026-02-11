const {cleanWebpackPlugin, htmlWebpackPlugin} = require('./plugins');

module.exports = {
  mode: "development",
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'scripts/[name].[hash:5].js',
    publicPath: '/'
  },
  plugins: [
    cleanWebpackPlugin,
    htmlWebpackPlugin,
  ],
  module: {
    rules: [{
      test: /\.(png)|(gif)|(jpg)$/, 
      use: [{
        loader: 'file-loader',
        options: {
          name: 'imgs/[name].[hash:5].[ext]'
        }
      }] 
    }]
  },
  devServer: {
    open: true,
    openPage: 'html/index.html'
  }
};
