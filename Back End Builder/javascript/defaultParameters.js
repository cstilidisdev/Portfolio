function performOperation(number1, number2, operation = "add") {
  switch (operation) {
    case "add":
      return number1 + number2;
    case "subtract":
      return number1 - number2;
    default:
      return "Invalid operation";
  }
}

console.log(performOperation(1, 3));
