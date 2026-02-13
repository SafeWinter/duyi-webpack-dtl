# L35：抽离 CSS 文件

本节对应第三章第十课（最后一节）。

---



目前，`CSS` 代码经 `css-loader` 转换后会交给 `style-loader` 进一步处理。

`style-loader` 会用一段 `JS` 代码，将样式加入到 `style` 元素中。

而实际的开发中，我们往往希望依赖的样式最终形成一个 `CSS` 文件

此时，就需要用到一个库：`mini-css-extract-plugin`

该库包含一个 `plugin` 和一个 `loader`

- `plugin`：负责生成 `CSS` 文件；
- `loader`：负责记录要生成的 `CSS` 文件的内容，同时导出开启 `css-module` 后的样式对象

使用方式：

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader?modules"]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin() // 负责生成 CSS 文件
    ]
}
```



**配置生成的文件名**

同 `output.filename` 的含义一样，即根据 `Chunk` 生成的样式文件名。

配置生成的文件名，例如：`[name].[contenthash:5].css`。

默认情况下，每个 `Chunk` 对应一个 `CSS` 文件。