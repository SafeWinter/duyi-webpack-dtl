import $ from 'jquery';

console.log('This is ES6 module: C.');

console.log('%cTesting jQuery import', 'color: #000; background: #0087d8')
console.log('Reading title ...');
const title = $('h1.title').html();
console.log('Title:', title);

console.log('exporting jQuery ($) ...');

export default $;