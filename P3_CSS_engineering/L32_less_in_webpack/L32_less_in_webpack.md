# L32：在 Webpack 中 使用 Less

本节对应第三章第七课。

本节大致录制时间：`2020-02-03 15:45:00`。

---



本节解决 `Less` 集成到 `Webpack` 环境的具体方法。



## 1 概要

先安装开发依赖 `less` 和 `less-loader`：

```bash
$ npm i -D less-loader@5 less@3
```

然后为 `Less` 文件添加新规则：

```js
// webpack.config.js:
module.exports = {
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader?modules']},
      { test: /\.less$/i, use: ['style-loader', 'css-loader?modules', 'less-loader']},
    ]
  },
}
```

更多配置详见 `NPM` 文档：[https://www.npmjs.com/package/less-loader](https://www.npmjs.com/package/less-loader)。



## 2 实测备忘

:one: `less-loader` 与前面介绍的 `CSS Module` 没有本质冲突，开启相应配置即可共同使用。



:two: 为防 `Less` 文件被 `VSCode` 安装的扩展自动转为 `CSS` 文件，整合前最好先关闭 `Easy LESS` 扩展的自动转换功能：

```json
// settings.json:
{
  "less.compile": {
    "out": false
  },
}
```

