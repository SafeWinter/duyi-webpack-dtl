import obj from './myMath';
const method = Math.random() < 0.5 ? 'add' : 'sub';
console.log(obj[method](1, 2));