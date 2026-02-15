const a = 1;

const b = () => console.log('b');

const Method = function() {
  const c = () => {
    console.log(this);
  }
}