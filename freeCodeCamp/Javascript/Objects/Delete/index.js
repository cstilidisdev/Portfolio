const person = {
  name: "Christos",
  age: 37,
  work: "Notion Developer",
  country: "Greece",
};

console.log("Before Delete");
console.log(person);
delete person.country;
console.log("After Delete");
console.log(person);
