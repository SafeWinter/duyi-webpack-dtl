# L10：入口和出口的最佳实践

---

> [!tip]
>
> **牢记**：具体情况具体分析。
>
> `Webpack` 真正的难点在于 **能否因地制宜、灵活应用**。



下面是一些经典场景。

## 1 一个页面一个JS

![](../../assets/10.1.png)

源码结构：

```bash
|—— src
    |—— pageA   页面A的代码目录
        |—— index.js 页面A的启动模块
        |—— ...
    |—— pageB   页面B的代码目录
        |—— index.js 页面B的启动模块
        |—— ...
    |—— pageC   页面C的代码目录
        |—— main1.js 页面C的启动模块1 例如：主功能
        |—— main2.js 页面C的启动模块2 例如：实现访问统计的额外功能
        |—— ...
    |—— common  公共代码目录
        |—— ...
```

`Webpack` 示例配置：

```js
module.exports = {
    entry:{
        pageA: "./src/pageA/index.js",
        pageB: "./src/pageB/index.js",
        pageC: ["./src/pageC/main1.js", "./src/pageC/main2.js"]
    },
    output:{
        filename:"[name].[chunkhash:5].js"
    }
}
```

这种方式适用于页面之间的 **功能差异巨大**、**公共代码较少** 的情况；此时打包后的最终代码不会有太多重复。

> [!tip]
>
> **如果重复代码过多**
>
> 假设开发时三个页面都大量引用了 `common.js` 模块中的代码：
>
> ```bash
> # 打包前（38Kb）
> common.js   8Kb
> pageA.js    10Kb
> pageB.js    10Kb
> pageC.js    10Kb
> 
> # 打包后用户访问页面时的 JS 实际下载量（54Kb）
> pageA.js    10Kb + 8Kb
> pageB.js    10Kb + 8Kb
> pageC.js    10Kb + 8Kb
> ```
>
> 如果让 `common.js` 独立出来，让每个页面都多引用一个 `common.js` 的打包文件，则除了第一次请求需要下载，后续页面都无需重复下载：
>
> ```bash
> # 打包后用户访问页面时的 JS 实际下载量（38Kb）
> pageA.js + common.js    10Kb + 8Kb
> pageB.js + common.js    10Kb + 缓存
> pageC.js + common.js    10Kb + 缓存
> ```
>
> 这说明重复的代码占比越大，用户实际下载节省的流量就相对越多。



## 2 一个页面多个 JS

![2020-01-10-12-38-03](../../assets/10.2.png)

源码结构：

```
|—— src
    |—— pageA   页面A的代码目录
        |—— index.js 页面A的启动模块
        |—— ...
    |—— pageB   页面B的代码目录
        |—— index.js 页面B的启动模块
        |—— ...
    |—— statistics   用于统计访问人数功能目录
        |—— index.js 启动模块
        |—— ...
    |—— common  公共代码目录
        |—— ...
```

`Webpack` 示例配置：

```js
module.exports = {
    entry:{
        pageA: "./src/pageA/index.js",
        pageB: "./src/pageB/index.js",
        statistics: "./src/statistics/index.js"
    },
    output:{
        filename:"[name].[chunkhash:5].js"
    }
}
```

这种方式适用于页面之间有一些**独立**、相同的功能，专门使用一个chunk抽离这部分JS有利于浏览器更好的缓存这部分内容。

> [!tip]
>
> **思考**：为什么不使用多启动模块的方式？
>
> 答：也可以，只不过又走回老路，把共享的 JS 代码重复打包到每个独立的 JS 中，增加了下载 `JS` 的总量。



## 3 单页应用

所谓 **单页应用**（即 `Single Page Application`，简称 `SPA`），是指整个网站（或网站的某一个功能块）只有一个页面，页面中的内容全部靠 `JS` 创建和控制。 `Vue` 和 `React` 都是实现单页应用的利器。

![2020-01-10-12-44-13](../../assets/10.3.png)

源码结构：

```
|—— src
    |—— subFunc   子功能目录
        |—— ...
    |—— subFunc   子功能目录
        |—— ...
    |—— common  公共代码目录
        |—— ...
    |—— index.js
```

`Webpack` 示例配置：

```js
module.exports = {
    entry: "./src/index.js",
    output:{
        filename:"index.[hash:5].js"
    }
}
```

