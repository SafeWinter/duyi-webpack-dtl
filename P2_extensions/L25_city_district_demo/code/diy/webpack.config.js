const baseCfg = require('./webpack.config.base');
const devCfg = require('./webpack.config.dev');
const prodCfg = require('./webpack.config.prod');

module.exports = function(env) {
  if (env && env.prod) {
    const options = {...baseCfg, ...prodCfg };
    return options;
  } else {
    const options = {...baseCfg, ...devCfg };
    return options;
  }
};
