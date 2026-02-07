module.exports = {
  mode: "development",
  entry: "./src/index.js",
  stats: {
    colors: true, // 彩色输出
    modules: false,  // 不展示模块明细
    hash: false, // 不显示总 Hash 值
    builtAt: false  // 不显示打包时间
  }
};
