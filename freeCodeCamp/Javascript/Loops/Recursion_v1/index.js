function factorial(n) {
  //Base case
  if (n == 0) {
    return 1;
  }
  //Recursive case
  else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));


/*
Explaination
factorial(5) = 5 * factorial(4)
factorial(4) = 4 * factorial(3)
factorial(3) = 3 * factorial(2)
factorial(2) = 2 * factorial(1)
factorial(1) = 1 * factorial(0)

In the particular algorith, because factorial(0) will met the 
Base case, it will return 1 and terminate the loop and eventually
it will calculate the total result like this:
(1*1) * 2 * 3 * 4 * 5
*/
