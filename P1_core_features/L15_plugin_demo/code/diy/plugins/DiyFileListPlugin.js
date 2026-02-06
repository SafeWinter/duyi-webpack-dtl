module.exports = class DiyFileListPlugin {

  constructor(filename) {
    this.filename = filename;
  }

  apply(compiler) {
    const filename = this.filename;
    compiler.hooks.emit.tap('DiyFileListPlugin-emit', function(compilation) {
      const { assets } = compilation;
      const contents = [];
      for (const iFilename in assets) {
        const content = assets[iFilename];
        const size = Math.round(100 * content.size() / 1024) / 100;
        contents.push(`【${iFilename}】\n大小：${size}Kb\n`);
      }

      compilation.assets[filename] = {
        source(){
          return contents.join('\n');
        },
        size() {
          return contents.length;
        }
      };
    });
  }
}