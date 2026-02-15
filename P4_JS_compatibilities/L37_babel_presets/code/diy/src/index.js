const arr = Array.of(1, 2, 3);

const obj = {
  name: 'animal',
  age: 3
};

const {name: animalName, age} = obj;
console.log({animalName, age});

for(const val of arr) {
  console.log(val);
}