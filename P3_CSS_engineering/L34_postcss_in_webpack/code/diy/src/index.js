import * as styles from "./assets/index.pcss";

console.log('module index');

console.log(styles);

const heading = document.querySelector('.heading');
heading.classList.add(styles.heading);