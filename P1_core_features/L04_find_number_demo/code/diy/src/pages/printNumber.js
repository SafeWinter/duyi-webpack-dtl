import { isPrime, randColor, randIndex } from '../util'

const DOM = {
  pool: document.querySelector('.pool'),
  center: document.querySelector('.n'),
  current: document.querySelector('.current')
};

export function draw(n, checker = isPrime) {
  const div = document.createElement('div');
  if(checker(n)) {
    div.classList.add('prime');
    
    const color = randColor();
    div.style.color = color;
    drawPrime(n, color);
  }
  div.innerHTML = `${n}`;
  DOM.pool.appendChild(div);

  DOM.center.innerHTML = `${n}`;
  DOM.center.classList.toggle('hidden', checker(n));
}

export function drawPrime(n, color) {
  // target: <span class="n prime">20</span>
  const span = document.createElement('span');
  span.classList.add('n', 'prime');
  span.style.color = color;
  span.innerHTML = n;
  DOM.current.appendChild(span);

  span.clientHeight;  // force render
  
  const rx = randIndex(150, -350), 
    ry = randIndex(150, -350);
  span.style.transform = `translate(${rx}px, ${ry}px)`;
  span.style.opacity = '0';

  // 淡出后删除元素
  span.ontransitionend = ev => ev.target.remove();
}