module.exports = function(srcCode) {
  return `const style = document.createElement('style');
style.innerHTML = \`${srcCode}\`;
document.querySelector('head').appendChild(style);
module.exports = \`${srcCode}\`;`
}