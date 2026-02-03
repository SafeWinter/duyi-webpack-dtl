export const randIndex = (end, start = 0) => 
  Math.floor(Math.random() * (end - start) + start); 

export const randColor = () => Array.from({length: 3}, (_, i) => i)
  .map(_ => randIndex(255))
  .map(n => n.toString(16))
  .reduce((acc, n) => acc + n, '#')
  .toUpperCase();