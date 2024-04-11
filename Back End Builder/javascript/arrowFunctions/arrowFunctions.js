// Traditional function expression
const add = function (a, b) {
  return a + b;
};

// Arrow function for addition
const arrowAdd = (a, b) => a + b;

// Traditional function expression with multiple lines
const greet = function (name) {
  return `Hello, ${name}`;
};

// Arrow function with implicit retur and tempalte literal
const arrowGreet = (name) => `Hello ${name}`;

// Arrow function with no parameters
const sayHello = () => "Hello";

// Arrow function with rest parameters
const sumAll = (...numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

// Arrow function using destructuring
const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;

// Example usage
console.log(add(2, 3)); // Output 5
console.log(add(2, 3)); // Output: 5
console.log(arrowAdd(2, 3)); // Output: 5
console.log(greet("John")); // Output: Hello, John!
console.log(arrowGreet("John")); // Output: Hello, John!
console.log(sayHello()); // Output: Hello!
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

const person = { firstName: "John", lastName: "Doe", age: 37 };
console.log(getFullName(person)); // Output: John Doe

console.log();
