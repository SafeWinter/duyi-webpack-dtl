const loaderUtils = require('loader-utils');

function getBase64(buffer) {
  return `data:image/png;base64,${buffer.toString('base64')}`;
}

function getFilename(buffer, filename) {
  const imgName = loaderUtils.interpolateName(this, filename, {
    content: buffer
  });
  this.emitFile(imgName, buffer);
  return imgName;
}

const imgLoader = function(buffer) {
  const {limit = 3000, filename = 'img-[contenthash:5].[ext]'} = loaderUtils.getOptions(this);
  let result;
  if(buffer.byteLength > limit) {
    result = getFilename.call(this, buffer, filename);
  } else {
    result = getBase64(buffer);
  }
  return `module.exports = '${result}'`;
};

imgLoader.raw = true;

module.exports = imgLoader;