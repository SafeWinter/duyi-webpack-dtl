const path = require('node:path');

const cases = [
  () => path.resolve('./'),
  () => path.resolve(__dirname),
  () => path.resolve('./', 'foo', 'bar'),
  () => path.resolve(__dirname, 'foo', 'bar'),
  () => path.resolve('./') === process.cwd(),
];

const getExpression = fn => fn.toString().replace('() => ', '');

console.log('Now in module test.js:');
cases.forEach((fn, i) => console.log(`
${(i + 1)}. ${getExpression(fn)} 
=>`, fn()));