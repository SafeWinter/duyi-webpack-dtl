import { NumberChecker } from '../util';
import { draw } from './printNumber.js';

export default function checkPrime(interval = 800) {
  const checker = new NumberChecker(interval);
  checker.performTask = draw;

  let activated = false;
  window.onclick = function() {
    activated = !activated;
    if(activated) {
      checker.start();
    } else {
      checker.stop();
    }
  }
}