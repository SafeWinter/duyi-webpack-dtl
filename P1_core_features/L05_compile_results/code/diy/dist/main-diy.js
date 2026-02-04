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
    eval("console.log(\"module a\");\n_module.exports = \"a\";\n\n\n//# sourceURL=webpack:///./src/a.js?");
  },
  './src/index.js'(module, exports, _require) {
    eval("console.log(\"module index\");\nvar a = _require(/*! ./a */ \"./src/a.js\");\na.bug();\nconsole.log(a);\n\n\n//# sourceURL=webpack:///./src/index.js?");
  }
});