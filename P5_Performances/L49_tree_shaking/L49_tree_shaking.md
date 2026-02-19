# L49：Webpack 代码压缩方案之 Tree Shaking 技术

本节为第五章第八课，大致录制时间：`2020-02-27 12:20:00`。

---

> [!tip]
>
> **引子**
>
> 压缩可以移除模块内部的无效代码；`Tree Shaking` 技术可以移除模块之间的无效代码。



优化相关的知识点无需记忆，只需在今后遇到问题需要优化时，再回头查阅相关内容，看看哪些优化手段最适合眼下的问题，就足够了。

`Tree Shaking` 技术属于单模块代码体积优化的一种：

![](../../assets/49.1.png)

一旦应用得当，`Tree Shaking` 技术可以极大地缩减最终的包的体积。



## 1 背景

某些模块导出的代码并不一定会被用到：

```js
// myMath.js
export function add(a, b){
  console.log("add")
  return a+b;
}

export function sub(a, b){
  console.log("sub")
  return a-b;
}
// index.js
import {add} from "./myMath"
console.log(add(1,2));
```

`tree shaking` 用于移除掉不会用到的导出：

![](../../assets/49.2.png)



## 2 使用

`Webpack2` 开始就支持了 `tree shaking`，其诞生时间甚至可追溯至 **上世纪八十年代**。

只要是生产环境，`tree shaking` 就会 **自动开启**。

`Tree Shaking` 优化是前端工程化优化手段中，为数不多的、会直接影响开发者代码书写方式的手段之一。



## 3 原理

`Webpack` 会从入口模块出发寻找依赖关系。

当解析一个模块时，`Webpack` 会根据 `ES6` 的模块导入语句来判断，该模块依赖了另一个模块的哪个导出。

`Webpack` 之所以选择 `ES6` 的模块导入语句，是因为 `ES6` 模块有以下特点——

1. 导入导出语句只能是 **顶层语句**：二者均不能像 `CommonJS` 那样出现在 `if` 分支逻辑中，也不能放到循环结构中，从而可以静态分析依赖关系（优化方案的设计者牺牲了代码的灵活度，但提高了代码的可读性以及可优化能力）；
2. `import` 的模块名只能是 **字符串常量**：例如不能写作 `import { add } from modulePath`，但是 `CommonJS` 就可以，因为 `require()` 本质上就是一个函数调用；
3. `import` 绑定的变量是 **不可变的**；

这些特征都非常有利于分析出 **稳定的依赖**。

在具体分析依赖时，`Webpack` 坚持的原则是：**保证代码正常运行，然后再尽量 tree shaking**。

所以，如果依赖的是一个导出对象，由于 `JS` 语言的动态特性，以及 `Webpack` 还不够智能，为了保证代码正常运行，它不会移除对象中的任何信息。

实测：用 `export default` 导出一个对象（`1361781`）：该对象的无关属性（`sub`）无法通过 `Tree Shaking` 瘦身——

![](../../assets/49.3.png)

再如：

```js
// ./src/myMath.js:
export default {
  add(a, b) {
    console.log("add");
    return a + b;
  },
  sub(a, b) {
    console.log("sub");
    return a - b;
  },
  mul(a, b) {
    console.log("mul");
    return a * b;
  }
};

// ./src/index.js:
import obj from './myMath';
const method = Math.random() < 0.5 ? 'add' : 'sub';
console.log(obj[method](1, 2));
```

最终 `obj` 也会保留所有属性，无法通过 `TreeShaking` 优化（`1db3fde`）：

![](../../assets/49.4.png)

因此，我们在编写代码的时候，**尽量**——

- 多使用 `export xxx` 导出，而不用 `export default {xxx}` 导出；
- 多使用 `import {xxx} from "xxx"` 导入，而不用 `import xxx from "xxx"` 导入；

依赖分析完毕后，`Webpack` 会根据每个模块每个导出是否被使用，标记其他导出为 `Dead Code`，然后交给代码压缩工具处理。

代码压缩工具最终移除掉那些标记为 `Dead Code` 的代码。

> [!tip]
>
> 对比 `import obj from ...` 与 `import * as obj from ...`
>
> 前者是导出一个 **普通对象**，因此其属性是 **可变的**；后者是导入的一个 **模块化的对象**，因此后者 `obj` 的属性是 **不可变的**。
>
> 例如：
>
> ```js
> import * as obj from './myMath.js';
> obj.add = () => console.log('changed add function');
> ```
>
> 最终效果（`679c060`）：
>
> ![](../../assets/49.5.png)



## 4 使用第三方库

某些第三方库可能使用的是 `CommonJS` 的方式导出，比如 `lodash`；又或者没有提供普通的 `ES6` 方式导出，对于这些库，`Tree Shaking` 是无法发挥作用的。

因此要寻找这些库的 `ES6` 版本。好在很多流行但没有使用的 `ES6` 的第三方库都发布了它的 `ES6` 版本，比如 `lodash-es`。

实测：使用 `lodash` 的打包情况：

![](../../assets/49.6.png)

使用 `lodash-es` 后的打包情况（模块体积大幅减少，详见 `2995da6`）：

![](../../assets/49.7.png)



## 5 作用域分析

`Tree Shaking` 本身并没有完善的作用域分析，可能导致在一些 `Dead Code` 函数中的依赖仍然会被视为依赖。

个人开发者发布的插件 `webpack-deep-scope-plugin` 提供了作用域分析，可解决这些问题（慎用）。

经实测，视频中提到的问题已被 `Webpack` 修复：

```js
// ./src/myMath.js:
import { chunk } from "lodash-es";

export function add(a, b) {
  console.log("add");
  return a + b;
}

export function sub(a, b) {
  console.log("sub");
  return a - b;
}

export function mul(a, b) {
  console.log("mul");
  return a * b;
}

export function myChunk(arr, n) {
  console.log("chunk");
  return chunk(arr, n);
}

// ./src/index.js:
import { add } from "./myMath";
console.log(add(1, 2));
```

最终打包后的 `JS` 代码中只有 `add()` 函数（`0e5a807`）。



## 6 副作用问题

`Webpack` 在 `Tree Shaking` 的使用上有一个原则：**一定要保证代码正确运行**。

要在先满足该原则的基础上，再来决定如何 `Tree Shaking`。

因此，当 `Webpack` 无法确定某个模块是否有副作用时，它往往 **将其视为有副作用**。

因此，某些处理可能并非开发者本意：

```js
// common.js
var n  = Math.random();

// index.js
import "./common.js"
```

虽然我们根本没用有 `common.js` 的导出，但 `webpack` 担心 `common.js` 有副作用，如果去掉可能会影响某些功能。

实测：`common.js` 中的代码虽然未使用，但也被打包了（`30f02e8`）：

![](../../assets/49.8.png)

要解决该问题，就需要手动标记该文件是没有副作用的：在 `package.json` 中加入 `sideEffects` 选项：

```json
{
    "sideEffects": false
}
```

有两种配置方式：

- `false`：当前工程中，所有模块都没有副作用。注意，这种写法会影响到某些 `CSS` 文件的导入；
- 数组：设置哪些文件拥有副作用，例如：`["!src/common.js"]`，表示只要不是 `src/common.js` 的文件，都有副作用。

> [!tip]
>
> 这种方式我们一般不处理，通常是一些第三方库在它们自己的 `package.json` 中标注。



## 7 CSS Tree Shaking

`Webpack` 无法对 `CSS` 完成 `tree shaking` 优化，因为 `CSS` 跟 `ES6` 没有半毛钱关系。

因此对 `CSS` 的 `Tree Shaking` 需要其他插件完成

例如：`purgecss-webpack-plugin`。该插件需要配置 `paths` 选项，其值为待处理的所有指定文件的 **绝对路径数组**。由于该插件不支持 `glob-pattern` 模式，无法用通配符批量设置多个文件的绝对路径，特此引入 `glob-all` 包：

```js
// webpack.config.js:
const path = require('node:path');
const src = path.resolve(__dirname, 'src');
const htmlPath = path.resolve(__dirname, 'public/index.html');
const { sync } = require('glob-all');
const paths = sync([`${src}**/*.js`, htmlPath]);
console.log(paths);

module.exports = {
  plugins: [
    new PurgePlugin({
      paths
    })
  ],
  module: {
    rules: [
      {test: /\.css$/, use: [ MiniCssExtractPlugin.loader, 'css-loader' ]}
    ]
  },
}
```

实测效果（`f80d4ad`）：

![](../../assets/49.9.png)

> [!note]
>
> **注意**
>
> `purgecss-webpack-plugin` 对 `CSS Module` 无能为力。

