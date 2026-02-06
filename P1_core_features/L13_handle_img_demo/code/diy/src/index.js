const imgSrc = require('./assets/webpack.png');

console.log('module index');

console.log('imgSrc:', imgSrc);

const img = document.createElement('img');
img.src = imgSrc;
const body = document.querySelector('body');
body.appendChild(img);
