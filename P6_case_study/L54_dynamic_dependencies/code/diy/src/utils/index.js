// exp / imp all JS modules in batch with require.context() API

const req = require.context('./', false, /\.js$/);
const REG_EXP = /\.\/(.*)\.js$/;

console.log(req.keys());

req.keys()
  .filter(id => id !== './index.js')
  .filter(id => REG_EXP.test(id))
  .forEach(moduleId => {
    const moduleName = REG_EXP.exec(moduleId)[1];
    exports[moduleName] = req(moduleId);
  });