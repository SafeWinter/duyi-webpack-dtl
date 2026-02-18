import a from './a.js';
import _ from 'lodash';

console.log('a:', a);

const obj = {
  a: 1,
  b: 2
};

console.log(_.isArray(obj));

if(module.hot) {
  module.hot.accept();
}