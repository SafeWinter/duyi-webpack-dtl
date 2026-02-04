export default class NumberChecker {
  constructor(interval = 500, counter = 1) {
    this.interval = interval;
    this.timer = null;
    this.counter = counter;
  }

  start() {
    if(this.timer) {
      return;
    }
    this.timer = setInterval(() => {
      this.performTask(this.counter++);
    }, this.interval);
  }

  stop() {
    clearInterval(this.timer);
    this.timer = null;
  }
}