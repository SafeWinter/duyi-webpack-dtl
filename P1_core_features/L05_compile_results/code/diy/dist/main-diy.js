const RES = (function(modules){
  const module = {
    exports: {}
  };
  
  // key = moduleId, value = moduleExports
  const _moduleCache = {};

  function _require(moduleId) {
    if(moduleId in _moduleCache) {
      return _moduleCache[moduleId];
    }

    const moduleHandler = modules[moduleId];
    moduleHandler.call(module.exports, module, module.exports, _require);
    const result = module.exports;

    _moduleCache[moduleId] = result;

    return result;
  }

  return _require('./src/index.js');
})({
  './src/a.js'(_module, exports, _require) {
    console.log("module a");
    _module.exports = "a";
  },
  './src/index.js'(module, exports, _require) {
    console.log("module index");
    var a = _require("./src/a.js");
    console.log(a);
  }
});