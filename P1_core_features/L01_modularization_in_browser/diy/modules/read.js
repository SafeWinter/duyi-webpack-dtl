const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(
  path.resolve(__dirname, './data.txt'), 
  { encoding: 'utf8' }
);
console.log('content from file:', content);