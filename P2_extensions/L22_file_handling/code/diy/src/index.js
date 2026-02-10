const {default: png} = require('./assets/webpack.png');

console.log('module index');

console.log('content of png from require:', png);

const img = document.createElement('img');
img.src = png;
document.body.appendChild(img);