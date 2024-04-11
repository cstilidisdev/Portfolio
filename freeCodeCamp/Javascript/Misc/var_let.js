/* 
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function(){
        return i
    }
    };
  }

console.log(printNumTwo());
*/

function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  i = "function scope edited";
  console.log("Function scope i is: ", i);
  return i;
}

checkScope();
console.log("Christos");
