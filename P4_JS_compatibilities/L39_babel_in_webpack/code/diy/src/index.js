const fn = () => console.log('arrow function');

class Demo {
  someMethod(){}
}

console.log('module index');

const h3 = document.createElement('h3'),
  pre = document.createElement('pre');
pre.innerHTML = `const fn = () => console.log('arrow function');

class Demo {
  someMethod(){}
}
`;
h3.appendChild(pre);
document.body.appendChild(h3);