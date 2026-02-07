require('@/components/sub1/sub2/sub3/foo');
const packageJson = require('_/package.json');

console.log("module index");
console.log('项目名称:', packageJson.name);