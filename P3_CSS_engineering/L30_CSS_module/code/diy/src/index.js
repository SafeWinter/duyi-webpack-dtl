import style1 from './assets/style1.css';

const dom = {
  c1: document.querySelector('.c1'),
  c2: document.querySelector('.c2'),
};
console.log('style1:', style1);
dom.c1.classList.add(style1.c1);
dom.c2.classList.add(style1.c2);