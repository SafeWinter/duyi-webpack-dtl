// const { cleanWebpackPlugin } = require('./cleanWebpackPlugin');
// const { htmlWebpackPlugin } = require('./htmlWebpackPlugin');
// module.exports = {
//   cleanWebpackPlugin,
//   htmlWebpackPlugin
// };

const fs = require('node:fs');
const path = require('node:path');

// 读取当前目录下的所有文件
// const files = fs.readdirSync(__dirname);
// console.log(files); // [ 'cleanWebpackPlugin.js', 'htmlWebpackPlugin.js', 'index.js' ]

fs.readdirSync(__dirname)
  .filter(file => file.endsWith('.js'))
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const moduleName = path.basename(file, '.js');
    // 将模块挂载到 exports 上
    exports[moduleName] = require(`./${file}`)[moduleName];
  });