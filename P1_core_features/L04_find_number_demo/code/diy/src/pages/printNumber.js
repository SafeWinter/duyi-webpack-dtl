import { isPrime, randColor, randIndex } from '../util';
import $ from 'jquery';

const DOM = {
  pool: $('.pool'),
  center: $('.n'),
  current: $('.current')
};

export function draw(n, checker = isPrime) {
  const div = $('<div>');
  if(checker(n)) {
    const color = randColor();
    div.addClass('prime')
      .css('color', color);
    drawPrime(n, color);
  }
  DOM.pool.append(div.html(`${n}`));

  DOM.center.html(`${n}`)
    .toggleClass('hidden', checker(n));
}

export function drawPrime(n, color) {
  // target: <span class="n prime">20</span>
  const span = $('<span>')
    .addClass(['n', 'prime'])
    .html(n)
    .css('color', color);
  DOM.current.append(span);

  span.get(0).clientHeight;  // force render
  
  const rx = randIndex(150, -350), 
    ry = randIndex(150, -350);
  span.css('transform', `translate(${rx}px, ${ry}px)`)
    .css('opacity', 0);

  // 淡出后删除元素
  span.on('transitionend', ev => ev.target.remove());
}