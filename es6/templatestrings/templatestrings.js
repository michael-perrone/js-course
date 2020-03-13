// template literals
// template strings
// string literals

let sayHello = "Hi my name is";
let name = "Mike";
let restOfGreeting = "and I am";
let yearsOld = 25;
let yearsOldString = "years old";

let newString =
  sayHello +
  " " +
  name +
  " " +
  restOfGreeting +
  " " +
  yearsOld +
  " " +
  yearsOldString;

console.log(newString);
// this is old way of combining strings

let newWayOfDoingIt = `${sayHello} ${name} ${restOfGreeting} ${yearsOld} ${yearsOldString}`;
console.log(newWayOfDoingIt);
