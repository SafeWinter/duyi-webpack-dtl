const baseCfg = require('./webpack.config.base');
const devCfg = require('./webpack.config.dev');
const prodCfg = require('./webpack.config.prod');

module.exports = env => {
  return env && env.dev
    ? {...baseCfg, ...devCfg}
    : {...baseCfg, ...prodCfg};
};
