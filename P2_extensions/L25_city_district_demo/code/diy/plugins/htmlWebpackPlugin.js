const HtmlWebpackPlugin = require('html-webpack-plugin');

const getParams = type => ({
  title: `S17L25 - Cascading Area | ${type}`,
  heading: `S17L25 - Cascading Area (${type})`
});

const listHtmlPlugin = new HtmlWebpackPlugin({
  template: './public/list.html',
  favicon: './public/favicon.ico',
  templateParameters: getParams('List'),
  filename: 'list.html',
  chunks: ['list']
});

const detailHtmlPlugin = new HtmlWebpackPlugin({
  template: './public/detail.html',
  favicon: './public/favicon.ico',
  templateParameters: getParams('Detail'),
  filename: 'detail.html',
  chunks: ['detail']
});

module.exports = {
  listHtmlPlugin,
  detailHtmlPlugin
}