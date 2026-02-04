import checkPrime from './pages/event.js';

console.log("index module");
checkPrime(500);

// import './util/mockdata.js';

// refactored util module
// import {isPrime, randColor} from './util'


// test isPrime()
// [1, 2, 3, 4, 5].forEach((n) =>
//   console.log(`Is ${n} a prime? ${isPrime(n) ? "Y" : "N"}`),
// );

// test randColor()
// console.log(randColor());

// function draw(n, checker = isPrime) {
//   const pool = document.querySelector('.pool');
//   const center = document.querySelector('.n');
//   const div = document.createElement('div');
//   if(checker(n)) {
//     div.classList.add('prime');
//     div.style.color = randColor();
//   }
//   div.innerHTML = `${n}`;
//   pool.appendChild(div);
//   center.innerHTML = `${n}`;
// }

// [1,2,3,4,5,6,7,8,9].forEach(n => draw(n, isPrime));

// let counter = 0;
// let timer;
// function start(interval = 500) {
//   if(timer) {
//     return;
//   }
//   timer = setInterval(() => {
//     draw(++counter);
//     if(counter >= 20) {
//       stop();
//     }
//   }, interval);
// }

// function stop() {
//   clearInterval(timer);
//   timer = null;
// }

// start()

// import {drawPrime} from './pages/printNumber.js';
// drawPrime(30);
