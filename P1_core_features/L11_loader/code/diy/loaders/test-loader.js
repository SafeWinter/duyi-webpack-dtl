const loaderUtils = require('loader-utils');

module.exports = function (srcCode) {
  console.log('source code:', `[${srcCode}]`);
  const { changeVar } = loaderUtils.getOptions(this);
  console.log('param changeVar =', changeVar);
  const regexp = new RegExp(changeVar, 'g');
  // Do convertion
  return regexp.test(srcCode) ? srcCode.replace(regexp, 'var') : srcCode;
};