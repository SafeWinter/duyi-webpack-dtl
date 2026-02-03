export const randIndex = (end, start = 0) => 
  Math.floor(Math.random() * (end - start) + start); 

export const randColor = () => Array.from({length: 3}, (_, i) => i)
  .map(_ => randIndex(255).toString(16).padStart(2, '0'))
  .reduce((prefix, hex) => prefix + hex, '#')
  .toUpperCase();