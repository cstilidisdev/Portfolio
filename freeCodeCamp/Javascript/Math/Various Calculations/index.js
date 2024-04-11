function generateNumber() {
  let min = 1;
  let max = 10;

  return Math.floor(Math.random() * (max - min + 1) + min);
}

function convertString(str){
  return parseInt(str)
}

console.log(generateNumber());
console.log(convertString("43"))
