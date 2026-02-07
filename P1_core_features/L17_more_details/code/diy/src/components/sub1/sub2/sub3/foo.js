// before:
// const bar = require('../../../bar');

// after:
const bar = require('@/components/bar');

console.log('module foo');
console.log('imported bar:', bar);