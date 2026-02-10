# L22：Webpack 对普通文件的处理

---

本节对应第二篇第五课。

录制时间：`2020-01-19 14:10`



## 1 概述

`file-loader`：生成依赖的文件到输出目录，然后将模块文件设置为：导出某个路径：

```js
// file-loader
function loader(source){
  // source：文件内容（图片内容 buffer）
  // 1. 生成一个具有相同文件内容的文件到输出目录
  // 2. 返回一段代码   export default "文件名"
}
```

`url-loader`：将依赖的文件转换为：导出一个base64格式的字符串


```js
// url-loader
function loader(source){
  // source：文件内容（图片内容 buffer）
  // 1. 根据 buffer 生成一个 base64 编码
  // 2. 返回一段代码   export default "base64编码"
}
```

> [!tip]
>
> `file-loader` 相当于分为两个方向：
>
> - 生成并发送文件到指定位置
> - 返回该文件的路径
>
> `url-loader` 相当于帮 `file-loader` 做了预筛选，尺寸小的直接转 `Base64` 编码字符串，超过阈值的（通过 `limit` 配置）再交给 `file-loader`。





## 2 实测备忘

（待补）