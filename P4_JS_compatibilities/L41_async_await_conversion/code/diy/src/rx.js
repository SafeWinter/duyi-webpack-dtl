import "core-js/features/observable/index.js";

const curry = fn =>
  (...args1) =>
    args1.length === fn.length
      ? fn(...args1)
      : (...args2) => {
          const args = [...args1, ...args2];
          return args.length >= fn.length 
            ? fn(...args) 
            : curry(fn)(...args);
        };

export const map = curry(
  (fn, stream) =>
    new Observable((observer) => {
      const subs = stream.subscribe({
        next(value) {
          try {
            observer.next(fn(value));
          } catch (err) {
            observer.error(err);
          }
        },
        error(e) {
          observer.error(e);
        },
        complete() {
          observer.complete();
        },
      });
      return () => subs.unsubscribe();
    }),
);

export const filter = curry(
  (predicate, stream) =>
    new Observable((observer) => {
      const subs = stream.subscribe({
        next(value) {
          if (predicate(value)) {
            observer.next(value);
          }
        },
        error(e) {
          observer.error(e);
        },
        complete() {
          observer.complete();
        },
      });
      return () => subs.unsubscribe();
    }),
);

export const skip = curry((count, stream) => {
  let skipped = 0;
  return new Observable((observer) => {
    const subs = stream.subscribe({
      next(value) {
        if (skipped++ >= count) {
          observer.next(value);
        }
      },
      error(e) {
        observer.error(e);
      },
      complete() {
        observer.complete();
      },
    });
    return () => subs.unsubscribe();
  });
});

export const reduce = curry((accumulator, initialValue, stream) => {
  let result = initialValue ?? {};
  return new Observable((observer) => {
    const subs = stream.subscribe({
      next(value) {
        result = accumulator(result, value);
      },
      error(e) {
        observer.error(e);
      },
      complete() {
        observer.next(result);
        observer.complete();
      },
    });
    return () => subs.unsubscribe();
  });
});

export const ReactiveExtensions = {
  filter(predicate) {
    return filter(predicate, this);
  },
  map(fn) {
    return map(fn, this);
  },
  skip(count) {
    return skip(count, this);
  },
  reduce(accumulator, initialValue = {}) {
    return reduce(accumulator, initialValue, this);
  },
};

// Extend native Observable object
Object.assign(Observable.prototype, ReactiveExtensions);
