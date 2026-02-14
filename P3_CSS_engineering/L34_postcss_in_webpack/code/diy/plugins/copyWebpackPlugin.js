const CopyWebpackPlugin = require("copy-webpack-plugin");

const copyPlugin = new CopyWebpackPlugin({
  patterns: [
    {
      from: "./public",
      to: "./",
      globOptions: {
        ignore: ["**/index.html"], // 忽略 index.html，让 HtmlWebpackPlugin 处理
      },
    },
  ],
});

module.exports = {
  copyPlugin,
};
