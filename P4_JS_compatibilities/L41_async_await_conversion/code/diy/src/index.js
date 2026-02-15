import { filter, map, reduce, skip } from "./rx.js";

const square = (num) => num ** 2;
const isEven = (num) => num % 2 === 0;
const add = (x, y) => x + y;

Observable.of(1, 2, 3, 4)
  |> skip(1)
  |> filter(isEven)
  |> map(square)
  |> reduce(add, 0)
  |> ($ => $.subscribe({
      next: console.log,
    }));
