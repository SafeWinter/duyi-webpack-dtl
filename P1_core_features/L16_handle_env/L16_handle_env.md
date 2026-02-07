# L16：区分环境

---



## 1 使用 --config 参数

将 `Webpack` 的开发配置放到 `webpack.dev.js`，生产配置放到 `webpack.prod.js`；然后在 `package.json` 用不同的 `config` 参数分别设置运行脚本：

```json
{
  "scripts": {
    "dev": "webpack --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
  }
}
```



## 2 使用 --env 参数

为了更好地适应多套配置的需求，`Webpack` 配置的表现形式不仅可以是一个配置对象，还可以是一个 **函数**：

```js
module.exports = env => {
    return {
        // 配置内容
    }
}
```

在 **开始构建** 时，`Webpack` 如果发现配置一个函数，会调用该函数，**将函数返回的对象作为配置内容**。

因此，开发者可以根据不同的环境返回不同的配置对象。

配置函数的参数 `env` 是通过 `webpack` 的命令行参数 `--env` 传入的，例如：

```shell
# env: "abc"
npx webpack --env abc

# env: {abc: true}
npx webpack --env.abc

# env： {abc: 1}
npx webpack --env.abc=1

# env: {abc: 1, bcd: 2}
npx webpack --env.abc=1 --env.bcd=2
```

这样一来，我们就可以在命令中指定环境，在代码中进行判断，根据环境返回不同的配置结果。

```js
// scripts.dev: "webpack --env.dev"
// webpack.config.js
module.exports = env => {
    if(env && env.dev) {
        return {
            mode: "development",
            devtool: "eval-source-map"
        }
    } else {
        return {
            mode: "production",
            devtool: "none"
        }
    } 
};
```



## 3 用模块化知识优化动态配置

利用模块化的知识，既可以：

```js
module.exports = env => {
    if(env && env.dev) {
        return require('./webpack.dev.js');
    } else {
        return require('./webpack.prod.js');
    } 
};
```

又可以在此基础上分离出通用配置 `webpack.base.js`，然后组合到配置函数中：

```js
// webpack.base.js:
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'scripts/[name]-[hash:5].js'
    }
};

// webpack.config.js:
const baseCfg = require('./webpack.base');
const devCfg = require('./webpack.dev');
const prodCfg = require('./webpack.prod');

module.exports = env => {
    return env && env.dev 
        ? {...baseCfg, ...devCfg}
        : {...baseCfg, ...prodCfg}
};
```

