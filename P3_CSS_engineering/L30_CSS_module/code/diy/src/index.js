import { c1, c2 } from './assets/style2.css';

const dom = {
  c1: document.querySelector('.c1'),
  c2: document.querySelector('.c2'),
};

dom.c1.classList.add(c1);
dom.c2.classList.add(c2, 'main');