import module1 from '@/assets/index.css';
import module2 from '@/assets/dependant.css';
import module3 from '@/assets/another.css';

console.log(module1);
console.log(module2);
console.log(module3);

const header = document.querySelector('.heading');
header.classList.add(module1.heading, module2.heading, module3.heading);