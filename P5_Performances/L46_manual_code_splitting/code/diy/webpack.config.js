const { htmlWebpackPlugin, copyWebpackPlugin, cleanWebpackPlugin } = require('./plugins');
const { DllReferencePlugin } = require('webpack');

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
    new DllReferencePlugin({
      manifest: require("./dll/jquery.manifest.json")
    }),
    new DllReferencePlugin({
      manifest: require("./dll/lodash.manifest.json")
    }),
  ],
  stats: {
    builtAt: false,
    modules: false,
  },
}