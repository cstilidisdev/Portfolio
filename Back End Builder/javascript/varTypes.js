//Global scope
console.log("Var type");
var globalVar = 10;

function example() {
  //Function scope
  var localVar = 20;
  console.log(globalVar); // Accessible from inside function
  console.log(localVar); // Accessible from inside function
}

console.log(globalVar); //Accessible globally
try {
  console.log(localVar); // Throws ReferenceError, not accessible outside the function
} catch (error) {
  console.error("The error:", error);
}

var globalVar = 30; // Redeckaration works without error
console.log(globalVar);
//--------------------------------------------------------
console.log("Let type");
let x = 10;

if (true) {
  let x = 20; // Different scope, no error
  console.log(x); // Outputs 20
}

console.log(x); // Outputs 10, no affected by inner scope declaration

// Attempting to redeclare the same variable in the same scope will throw a SyntaxError
try {
  let x = 30; // SyntaxError: Identifier 'x' as already been declared
} catch {
  console.error("Error: ", error);
}

//--------------------------------------------------------
console.log("Const type");
const PI = 3.14159;

if (true) {
  const PI = 42; // Different scope, no error
  console.log(PI); // Outputs 42
}

console.log(PI); // Outputs 3.14159, ot affected by inner scope declaration

// Attempting to reassign a constant will throw a TypeError
//PI = 3; // TypeError: Assignment to constant variable (cannot be updates like let type)

// Attempting to redeclare the same constant in the same scope will throw a SyntaxError
//const PI = 3; // SyntaxError: Identifier 'PI' has already been declared
