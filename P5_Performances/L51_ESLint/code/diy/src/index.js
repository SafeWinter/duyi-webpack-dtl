async function demo() {
  const a = 1;
  return Promise.resolve(a);
}

console.log(demo()
  .then(console.log));