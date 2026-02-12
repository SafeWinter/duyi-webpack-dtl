const {listHtmlPlugin, detailHtmlPlugin, copyWebpackPlugin } = require('./plugins');

module.exports = {
  entry: {
    list: './src/list/index.js',
    detail: './src/detail/index.js'
  },
  output: {
    filename: 'scripts/[name].[hash:5].js'
  },
  stats: {
    modules: false,
    builtAt: false,
    colors: true
  },
  plugins: [
    listHtmlPlugin,
    detailHtmlPlugin,
    copyWebpackPlugin
  ]
}