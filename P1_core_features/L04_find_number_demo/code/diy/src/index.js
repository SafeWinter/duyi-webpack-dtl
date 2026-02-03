// import './util/mockdata.js';

// refactored util module
import {isPrime, randColor} from './util'

console.log("index module");

// test isPrime()
[1, 2, 3, 4, 5].forEach((n) =>
  console.log(`Is ${n} a prime? ${isPrime(n) ? "Y" : "N"}`),
);

// test randColor()
console.log(randColor());
