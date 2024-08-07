//***Simple Match
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/;
// let result = extractStr.match(codingRegex);
// console.log(result);
// console.log(extractStr.match(/extract/i));

//--------------------------

//***Match more tha once

// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle/gi;
// let result = twinkleStar.match(starRegex);
// console.log(result);

//--------------------------

//***Match using wildcard '.'

// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/;
// let result = unRegex.test(exampleStr);
// let result2 = exampleStr.match(unRegex)
// console.log(result2);

//--------------------------

//***Match character by exluding case 1

// let bigStr = "big";
// let bugStr = "bug";
// let bogStr = "bog";

// let regex = /b[iu]g/;

// result1 = bigStr.match(regex);
// result2 = bogStr.match(regex);

// console.log(result1 + " " +  result2);

//***Match character by extracting specific characters

// let quoteSample =
//   "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi;
// let result = quoteSample.match(vowelRegex);

// console.log(result);

//--------------------------

//***Match character with range of characters

// let quoteSample = "The quick brown fox jumps over the lazy dog";
// let alphabetRegex = /[a-z]/ig;

// let result = quoteSample.match(alphabetRegex);

// console.log(result);

//--------------------------

//***Match character and numbers with range of characters

// let quoteSample = "Blueberry 3.141592653s are delicious."
// let myRegex = /[h-s2-6]/ig
// let result = quoteSample.match(myRegex)

// console.log(result)

//--------------------------

//***Exclude negated characters and numbers with

let quoteSample = "3 blind mice";
let myRegex = /[^aeiou]/gi;
let result = quoteSample.match(myRegex);
console.log(result);
