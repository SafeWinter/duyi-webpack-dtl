import banner from './assets/banner.css';

console.log(banner);
console.log('banner.toString():', banner.toString());

const style = document.createElement('style');
style.innerHTML = banner.toString();
document.head.appendChild(style);