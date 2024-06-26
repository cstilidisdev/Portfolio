function sum(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4));

// Exercise: Use the spread operator to combine two arrays into one
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];

console.log(arr2);

//Exersice: Return the sum of an array
const prices = [5, 10, 15, 20, 25, 30];

const total1 = prices.reduce(sum1);

console.log(`$${total1.toFixed(2)}`);

function sum1(acc, cur) {
  return acc + cur;
}

//Exercise: Array of grades - find the maximum
const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(acc, curr) {
  return Math.max(acc, curr);
}

function getMin(acc, cur) {
  return Math.min(acc, cur);
}

// Parse the callback to the reduce method as a parameter
const numbers = [1, -1, 2, 3];

const total2 = numbers.reduce((acc, cur) => acc + cur);

console.log(total2);
