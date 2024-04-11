// const addNum = (n1, n2) => n1 + n2

// console.log(addNum(2, 5));

// ------------------------------------

// const greeting = (name = "Anonymous") => "Hello " + name

// console.log(greeting())
// console.log(greeting("Christos"))

// ------------------------------------

// const addValue = (number = 2, value = 1) => number + value

// console.log(addValue())

// ------------------------------------

// function howMany (...args){
//     return "You have passed " + args.length + " arguments"
// }

// console.log(howMany(0,1,2))
// console.log(howMany("string", null, [1,2,3], {}))

// ------------------------------------

// const sum = (...args) => {
//   //const args = [x, y, z];
//   let sum = 0
//   for (const item of args) {
//     sum+=item
//   }
//   return sum;
// }
// const myArray = [1,2,3,4,5]
// console.log(Math.max(...myArray))

// ------------------------------------

// let user = {
//   name: "Christos",
//   age: 38,
//   email: "cstilidis@gmail.com",
// };

// const {age: myName} = user

// console.log(myName)

// ------------------------------------

// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };

// // Only change code below this line

// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow;

// // Only change code above this line

// ------------------------------------

// const LOCAL_FORECAST = {
//   yesterday: {low: 61, high: 75},
//   today: {low: 64, high: 77},
//   tomorrow: {low: 68, high: 80}
// }

// const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST

// console.log(lowToday, highToday)

// ------------------------------------

// function removeFirstTwo(list) {
//     const [ , , ...arr] = list
//     return arr;
//   }

//   const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const sourceWithoutFirstTwo = removeFirstTwo(source);

//   console.log(sourceWithoutFirstTwo)

// ------------------------------------

// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };

// const half = ({max, min}) => (max + min) / 2.0

// const result = half(stats)
// console.log(result)

// ------------------------------------

// const person = {
//   name: "Christos",
//   age: 38
// }

// const greeting = `Hello, my name is ${person.name}!
// I am ${person.age} years old`

// console.log(greeting)

// ------------------------------------

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"],
// };
// function makeList(arr) {
//   // Only change code below this line
//   const failureItems = [];
//   for (const item of arr) {
//     failureItems.push(`<li class="text-warning"> ${item} </li>`);
//   }
//   // Only change code above this line

//   return failureItems;
// }

// const failuresList = makeList(result.failure);
// console.log(failuresList);

// ------------------------------------

// const createPerson = (name, age, gender) => ({name, age, gender})

// const myPerson = createPerson("Christos", 38, "male")

// console.log(myPerson)

// ------------------------------------

// const bicycle = {
//   gear: 2,
//   setGear(newGear) {
//     this.gear = newGear
//   }
// }

// bicycle.setGear(3)
// console.log(bicycle.gear)

// ------------------------------------

// class SpaceShuttle {
//   constructor(targetPlanet){
//     this.targetPlanet = targetPlanet
//   }
//   takeOff(){
//     console.log("To " + this.targetPlanet + "!");
//   }
// }

// const zeus = new SpaceShuttle("the moon")
// console.log(zeus.takeOff())

// class Rocket {
//   launch(){
//     console.log("To the moon!")
//   }
// }

// const atlas = new Rocket()
// atlas.launch()

// ------------------------------------

//Getters and Setters

// class Book {
//   constructor(author){
//     this._author = author
//   }

//   get writer(){
//     return this._author
//   }

//   set writer(updatedAuthor){
//     this._author = updatedAuthor
//   }
// }

// const novel = new Book("anonymous")
// console.log(novel.writer)
// novel.writer="newAuthor"
// console.log(novel.writer)

// ------------------------------------

// class Thermostat {
//   constructor(temperatureF) {
//     this.temperature = temperatureF;
//   }

//   get celcious() {
//     return (5 / 9) * (this.temperature - 32);
//   }

//   set celcious(temperatureF) {
//     this.temperature = (temperatureF * 9.0) / 5 + 32;
//   }
// }

// const calculateF = new Thermostat(100);

// console.log(calculateF.celcious);
// calculateF.celcious=37.7777;
// console.log(calculateF.celcious);

// ------------------------------------
