const path = require('node:path');

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, 'src'),
  entry: "./index.js", // i.e. ./src/index.js
  module: {
    rules: [{
      test: /index\.js$/,
      use: [{
        loader: '../loaders/loader1.js'  // i.e. ./loaders/loader1.js
      }]
    }]
  },
};
