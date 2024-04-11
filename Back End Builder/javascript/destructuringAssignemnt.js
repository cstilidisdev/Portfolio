// Object
const person = {
  name: "Bob",
  age: 30,
};

const { name, age } = person;

console.log(age);

// Nested object

const user = {
  id: "123",
  address: {
    city: "Paris",
    country: "France",
  },
};

const {
  id,
  address: { city },
  address: { country },
} = user;

console.log(id);
console.log(city);
console.log(country);

// Exercise: Destructure and log the first and third elements of an array.
// Array
const array = [1, 2, 3];

const [var1, , var3] = array;

console.log(var1);
console.log(var3);
