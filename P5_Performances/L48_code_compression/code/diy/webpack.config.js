const { cleanWebpackPlugin, htmlWebpackPlugin } = require('./plugins');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].js'
  },
  plugins: [
    cleanWebpackPlugin,
    htmlWebpackPlugin,
    new MiniCssExtractPlugin({
      filename: '[name].[hash:5].css'
    })
  ],
  stats: {
    builtAt: false,
    modules: false,
  },
  optimization: {
    // 是否要启用压缩，默认情况下，生产环境会自动开启
    minimize: true,
    minimizer: [
      // 压缩时使用的插件，可以有多个
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  module: {
    rules: [
      {test: /\.css$/, use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
      ]}
    ]
  },
}