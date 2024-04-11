function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.push(n); //use unshift to get the opposite reuslts
    return countArray;
  }
}

console.log(countdown(3));
