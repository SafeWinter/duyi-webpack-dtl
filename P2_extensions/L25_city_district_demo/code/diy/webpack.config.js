const baseCfg = require('./webpack.config.base');
const devCfg = require('./webpack.config.dev');
const prodCfg = require('./webpack.config.prod');
const { merge } = require('webpack-merge');

module.exports = (env) => (env && env.prod)
  ? merge(baseCfg, prodCfg)
  : merge(baseCfg, devCfg);
