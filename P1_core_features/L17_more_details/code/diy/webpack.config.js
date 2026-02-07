module.exports = {
  mode: "development",
  entry: "./src/index.js",
  externals: {
    jquery: '$',
    lodash: '_'
  }
};
