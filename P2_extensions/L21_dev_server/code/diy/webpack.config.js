const {cleanWebpackPlugin, htmlWebpackPlugin, copyWebpackPlugin} = require('./plugins');

module.exports = {
  mode: "development",
  devtool: 'source-map',
  entry: {
    portal: './src/index.js'
  },
  output: {
    filename: '[name].[hash:5].js',
  },
  plugins: [
    cleanWebpackPlugin,
    copyWebpackPlugin,
    htmlWebpackPlugin,
  ],
  devServer: {
    port: 8088,
    open: 'chrome',
    index: 'portal.html',
    proxy: {
      '/api': {
        target: 'https://api.bilibili.com',
        pathRewrite: {'^/api': '/x'},
        changeOrigin: true
      }
    },
    stats: 'errors-only'
  }
};
