const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const cleanWebpackPlugin = new CleanWebpackPlugin({
  // 要清除的文件或目录
  // 排除掉dll目录本身和它里面的文件
  cleanOnceBeforeBuildPatterns: ["**/*", '!dll', '!dll/*']
});

module.exports = {
  cleanWebpackPlugin
}