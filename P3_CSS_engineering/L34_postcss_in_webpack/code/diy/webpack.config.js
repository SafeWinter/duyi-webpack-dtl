const { htmlPlugin, copyPlugin } = require("./plugins");

const cssLoader = {
  loader: "css-loader",
  options: {
    modules: {
      localIdentName: "[local]_[hash:5]",
    },
  },
};

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  plugins: [htmlPlugin, copyPlugin],
  module: {
    rules: [
      {
        test: /\.pcss$/i,
        use: ["style-loader", cssLoader, "postcss-loader"],
      },
    ],
  },
  output: {
    filename: "[name].[chunkhash:5].js",
    clean: true,
  },
  stats: {
    modules: false,
    builtAt: false,
  },
  devServer: {
    open: true,
    port: 9000,
  },
  watch: true
};
