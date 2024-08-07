function greet() {
  console.log("Hello!");
}

// Execute the greet function after 2000 milliseconds (2 seconds)
setTimeout(greet, 2000);

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
