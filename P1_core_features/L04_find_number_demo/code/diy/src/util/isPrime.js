export default (n) => {
  if(n < 2) {
    return false;
  }
  
  for(let i = 2, len = Math.ceil(n ** 0.5); i <= len; i++) {
    if(n % i === 0) {
      return false;
    }
  }
  return true;
};