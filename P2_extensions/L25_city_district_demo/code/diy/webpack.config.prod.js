const { cleanWebpackPlugin } = require('./plugins');

module.exports = {
  mode: 'production',
  devtool: "none",
  plugins: [
    cleanWebpackPlugin
  ],
}