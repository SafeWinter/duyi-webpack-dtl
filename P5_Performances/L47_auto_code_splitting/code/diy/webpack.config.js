const { htmlWebpackPlugin1, htmlWebpackPlugin2, cleanWebpackPlugin } = require('./plugins');

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
    htmlWebpackPlugin1,
    htmlWebpackPlugin2,
    cleanWebpackPlugin,
  ],
  stats: {
    builtAt: false,
    modules: false,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      maxSize: 60 * 1024, // 60Kb
    }
  },
}