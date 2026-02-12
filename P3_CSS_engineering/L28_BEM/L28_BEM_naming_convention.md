# L28：BEM 模块化命名约定

本节对应第三章第三课。

---



> [!tip]
>
> **小贴士**
>
> 本节未使用 `Webpack` 演示，仅对 `BEM` 的相关概念和用法进行了讲解。
>
> 更多 `BEM` 的介绍可以参考 `CSDN` 专栏文章《[【CSS in Depth 2 精译_058】第九章 CSS 的模块化与作用域 + 9.1 CSS 模块的定义（下）](https://blog.csdn.net/frgod/article/details/143857555)》。



## 1 核心要点

`BEM` 是一套针对 `CSS` 类样式的命名约定。其他命名方法还有：`OOCSS`、`AMCSS`、`SMACSS` 等等。

`BEM` 全称为 **B**lock **E**lement **M**odifier。

一个完整的 `BEM` 类名格式：`block__element_modifier`，例如：```banner__dot_selected```，可以表示：**轮播图** 中处于 **选中状态** 的 **小圆点**：

![](../../assets/28.1.png)

其中三个部分的具体含义为——

- **Block**：页面中的 **大区域**，表示最顶级的划分，例如轮播图（`banner`）、布局（`layout`）、文章（`article`）等等；
- **Element**：区域中的 **组成部分**，例如：轮播图中的横幅图片（`banner__img`）、容器（`banner__container`）、布局中的标题部分（`layout__header`）、以及文章中的标题（`article_title`）；
- **Modifier**：可选。通常表示 **状态**，例如：**处于展开状态** 的布局左边栏（`layout__left_expand`）、**处于选中状态** 的轮播图小圆点（banner__dot_selected）。

在某些大型工程中，如果使用 `BEM` 命名法，还可能会增加一个前缀，来表示类名的用途，常见的前缀有：

- **l**：即 `layout`，表示该样式用于布局；

- **c**：即 `component`，表示该样式是一个组件，即一个功能区域；

- **u**：即 `util`，表示该样式是一个通用的、工具性质的样式；

- **j**：即 `javascript`，表示该样式没有实际意义，专供 `JS` 获取元素使用。例如：

  ```js
  const container = document.querySelector('.j-adv__container');
  ```



## 2 实测备忘

核心结构：

```html
<body>
    <div class="banner__container">
        <div class="banner__imgcontainer">
            <img src="demo.jpg" alt="">
            <img src="demo.jpg" alt="">
            <img src="demo.jpg" alt="">
        </div>
        <div class="banner__dotcontainer">
            <span class="banner__dot banner__dot_selected"></span>
            <span class="banner__dot"></span>
            <span class="banner__dot"></span>
        </div>
    </div>
</body>
```

核心样式：

```css
.banner__container {
    width: 520px;
    height: 280px;
    margin: 0 auto;
    outline: 1px solid;
    overflow: hidden;
    position: relative;
}

.banner__imgcontainer {
    width: 1560px;
    height: 280px;
    /* background: red; */
}

.banner__imgcontainer img {
    float: left;
    width: 520px;
    height: 280px;
}

.banner__dotcontainer {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 5px;
    background: rgba(0, 0, 0, .5);
    border-radius: 5px;
}

.banner__dot{
    float: left;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    margin: 5px;
}

.banner__dot_selected{
    background: #f40;
}
```

