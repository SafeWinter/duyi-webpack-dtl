module.exports = {
  mode: "development",
  module: {
    rules: [
      { test: /index\.js/, use: ["./loaders/test-loader.js?changeVar=变量"] }
    ],
  },
};
