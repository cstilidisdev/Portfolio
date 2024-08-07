// callback = function that is passed as an argument
// to another function

// Used to handle asynchronous operations:
// 1. Reading a file
// 2. Network requests
// 3. Interacting with databases

// Example 1 ⭐️⭐️⭐️⭐️⭐️

var lname = function () {
  console.log("Stylidis");
};

firstName(lname);

function firstName(callback) {
  console.log("Christos");
  callback();
}

function wait() {
  console.log("Wait!");
}

function leave() {
  console.log("Leave!");
}

function goodbye() {
  console.log("Goodbye");
}

// Example 2 ⭐️⭐️⭐️⭐️⭐️

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log("The result is: " + result);
}

sum(displayPage, 3, 5);

// display to DOM
function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}

// Example 3 ⭐️⭐️⭐️⭐️⭐️

// Function to perform addition and call a callback with the result
function printAdd(callback, x, y) {
  var result = x + y;
  // Call the callback function with the result
  callback(result);
}

// Callback function to print the result
function printMessage(result) {
  console.log("The result is: " + result);
}

// Call the printAdd function and pass printMessage as a callback
printAdd(printMessage, 2, 3);
