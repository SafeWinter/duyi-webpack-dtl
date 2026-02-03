import $ from './c';

console.log('This is module: b. I need module C');

console.log('Testing extract paragraph content ...');
const content = $('p.content').text();
console.log('Paragraph text: ', content);
