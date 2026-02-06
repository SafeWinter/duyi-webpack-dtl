const DiyFileListPlugin = require('./plugins/DiyFileListPlugin');

module.exports = {
  mode: "development",
  devtool: 'source-map',
  plugins: [
    new DiyFileListPlugin('filelist.txt'),
  ]
};
