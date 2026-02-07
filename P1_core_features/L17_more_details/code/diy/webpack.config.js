module.exports = {
  mode: "development",
  entry: "./src/index.js",
  resolve: {
    modules: ['abc/node_modules'] // use: npm i jquery@3 --prefix abc
  }
};
