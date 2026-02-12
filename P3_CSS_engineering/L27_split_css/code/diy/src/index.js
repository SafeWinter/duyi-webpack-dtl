import banner from './assets/banner.css';

console.log('module index');

const style = document.createElement('style');
style.innerHTML = banner.toString();
document.head.appendChild(style);