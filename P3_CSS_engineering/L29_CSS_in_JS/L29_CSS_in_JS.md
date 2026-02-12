# L29：CSS-in-JS 样式方案

本节对应第三章第四课。

---



## 1 核心要点

`CSS-in-JS` 的核心思想是：用一个 `JS` 对象来描述样式，而不是用 `CSS` 来描述。

例如下面的对象就是一个用于描述样式的对象：

```js
const styles = {
    backgroundColor: "#f40",
    color: "#fff",
    width: "400px",
    height: "500px",
    margin: "0 auto"
}
```

由于这种描述方式 **根本就不存在样式类**，自然不会有类名冲突。

至于如何把样式应用到界面上，不是它所关心的事，你可以用任何技术、任何框架、任何方式将它应用到界面。

> [!tip]
>
> **小贴士**
>
> 后续学习的 `Vue`、`React` 都支持 `CSS-in-JS`，可以非常轻松地将其应用于界面。

`CSS-in-JS` 的特点：

- **绝无冲突的可能**：由于它根本不存在类名，所以绝不可能出现类名冲突；
- **更加灵活**：可以充分利用 `JS` 语言的灵活性，用各种方式来处理样式；
- **应用面更广**：任何支持 `JS` 语言的地方就能支持 `CSS-in-JS`；因此，它在一些基于 `JS` 开发的移动端应用中非常好用，这些移动端应用很可能并不支持 `CSS`（例如 `VSCode` 这样的窗体界面）；
- **书写不便**：尤其是在书写公共样式时，处理起来不是很方便；
- **在页面中增加了大量冗余内容**：在页面中处理 `CSS-in-JS` 时，往往是将样式加入到 `HTML` 元素的 `style` 属性中；这样会大量增加元素的内联样式，并且可能会有大量冗余样式，最终的样式代码可读性也较差。



## 2 实测备忘

核心示例：

```html
<body>
    <div id="div1"></div>
    <div id="div2"></div>
    <script src="./scripts/index.js" type="module"></script>
</body>
```

关联的 `index.js`：

```js
import { applyStyles } from "./css/util.js"
import { border, redBg } from "./css/common.js"
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

const styles = {
    width: "400px",
    height: "500px",
    margin: "0 auto"
}

applyStyles(div1, styles, border(), redBg)
applyStyles(div2, styles, border(5, "green"));

// css/util.js
/**
* 给某个dom元素应用一个样式
* @param {*} dom dom元素
* @param {*} styles 样式对象
*/
export function applyStyles(dom, ...styles) {
    let targetStyles = {}; //最终合并的样式对象
    for (const style of styles) {
        targetStyles = {
            ...targetStyles,
            ...style
        }
    }

    for (const key in targetStyles) {
        const value = targetStyles[key];
        dom.style[key] = value;
    }
}

// css/common.js
/**
* 给某个dom元素应用一个样式
* @param {*} dom dom元素
* @param {*} styles 样式对象
*/
export function applyStyles(dom, ...styles) {
    let targetStyles = {}; //最终合并的样式对象
    for (const style of styles) {
        targetStyles = {
            ...targetStyles,
            ...style
        }
    }

    for (const key in targetStyles) {
        const value = targetStyles[key];
        dom.style[key] = value;
    }
}
```

