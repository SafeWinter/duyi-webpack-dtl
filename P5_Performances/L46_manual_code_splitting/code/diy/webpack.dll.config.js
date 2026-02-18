const path = require('node:path');
const { DllPlugin } = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    jquery: ['jquery'],
    lodash: ['lodash']
  },
  output: {
    filename: 'dll/[name].js',
    library: '[name]'
  },
  plugins: [
    new DllPlugin({
      // 资源清单中暴露的变量名
      name: '[name]',
      // 资源清单的保存位置
      path: path.resolve(__dirname, 'dll', '[name].manifest.json')
    })
  ],
}