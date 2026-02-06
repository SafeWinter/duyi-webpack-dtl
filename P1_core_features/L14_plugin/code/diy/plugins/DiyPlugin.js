module.exports = class DiyPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('DiyPlugi-done', function(compilation) {
      console.log('DiyPlugin done!!!');
    });
  }
}