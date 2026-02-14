const fs = require('node:fs');
const postcss = require('postcss');
const apply = require('postcss-apply');

const input = fs.readFileSync('./css/source.pcss', 'utf8');

postcss()
  .use(apply)
  .process(input, {
    from: './css/source.pcss',  // 指定源文件路径
    to: './css/target-js.css'    // 可选：指定输出文件路径
  })
  .then(({css}) => 
    fs.writeFileSync('./css/target-js.css', css));