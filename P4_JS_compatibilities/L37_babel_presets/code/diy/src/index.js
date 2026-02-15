// const a = 1;

// const b = () => console.log('b');

// const Method = function() {
//   const c = () => {
//     console.log(this);
//   }
// }

const p = Promise.resolve(123)
  .then(console.log)
  .catch(console.error);