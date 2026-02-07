const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: 'main-[hash:5].js'
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true
    })
  ]
};
