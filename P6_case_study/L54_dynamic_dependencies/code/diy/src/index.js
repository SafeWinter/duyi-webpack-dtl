console.log('module index');

const moduleName = document.querySelector('input').value;
const content = require(`./utils/${moduleName}`);
console.log(content);
