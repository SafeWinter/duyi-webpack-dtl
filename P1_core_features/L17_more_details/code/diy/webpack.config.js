const path = require('node:path');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '_': __dirname
    }
  }
};
