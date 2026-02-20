// exp / imp all JS modules in batch with require.context() API

const req = require.context('./', false, /\.js$/);

console.log(req.keys());

for (const moduleId of req.keys()) {
  if(moduleId !== './index.js') {
    const fileName = /\.\/(.*)\.js$/.exec(moduleId)[1];
    exports[fileName] = req(moduleId);
  }
}