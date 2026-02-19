const { cleanWebpackPlugin, htmlWebpackPlugin } = require('./plugins');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    page1: './src/page1',
    page2: './src/page2'
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    cleanWebpackPlugin,
    htmlWebpackPlugin,
    new MiniCssExtractPlugin({
      filename: '[name].[hash:5].css',
      chunkFilename: 'common.[hash:5].css'
    })
  ],
  stats: {
    builtAt: false,
    modules: false,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      // maxSize: 60 * 1024, // 60Kb
      cacheGroups: {
        styles: {
          test: /\.css$/,
          minSize: 0,  // 覆盖默认的最小尺寸，这里仅仅是作为测试
          minChunks: 2 // 覆盖默认的最小 Chunk 引用数
        }
      }
    }
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