module.exports = {
  mode: "development",
  module: {
    rules: [
      { 
        test: /\.png/, 
        use: [{
          loader: "./loaders/img-loader.js",
          options: {
            limit: 3000,
            filename: 'img-[contenthash:4].[ext]'
          }
        }] 
      },
    ],
  },
};
