//Javascript Example: Variables, Data Types, Operations, and Control Structure

//Greeting based on age

// 1. Variable declarations
//--------------------------
let userName = "Christos";
const yearOfBirth = 1985;

// 2. Calculating Age
let currentYear = new Date().getFullYear();
let age = currentYear - yearOfBirth;

// 3. Determining Adult Status and Greeting
if (age >= 18) {
  console.log(
    `Hello, ${userName}. You are ${age} year old and legally and adult.`
  );
} else {
  console.log(`Hello, ${userName}. You are ${age} years old and underage.`);
}
