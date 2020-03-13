// let and const are the new ways as of es6 to declare variables
// var really isnt used too much anymore

// the let keyword is block scoped
// that means if it is created inside of curly braces
// for example a for loop or if statement or a function
// it cannot be read outside of where it was declared
// var can be read outside of the declared curly braces

var myVariable = "mike";
let ourSecondVariable = "jack";

console.log(myVariable);
console.log(ourSecondVariable);

if (true) {
  let newVariable = "tommy";
}

if (true) {
  var anotherNewVariable = "Emily";
}

console.log(anotherNewVariable);

if (true) {
  let firstLetVariable = "johnny";
  var anotherVar = "chris";
  console.log(anotherVar);
  console.log(firstLetVariable);
}
var anotherVar = "jane";
console.log(anotherVar);
if (true) {
  let firstLetVariable = "mike";
  firstLetVariable = "new Name";
  var anotherVar = "emma";
  console.log(anotherVar);
  console.log(firstLetVariable);
}
console.log(anotherVar);
// if you put vars in something called the global namespace
// you can introduce terrible bugs because you could accidentally overwrite your teammates variable
// 100 vars with the same name

////////////////////////////////////////////////////
////////////////////////////////////////////////////

// this is now allowed... constants must have a value ---- const mike;
const mike = "tomato";
console.log(mike);
// mike = "noodle";
///////////////////////////////////
///////////////////////////////////

const constantArray = [4, 5, 6];

constantArray.push(7);
console.log(constantArray);

const constantObject = { name: "mike", cool: "yes" };

constantObject.hairColor = "brown";

console.log(constantObject);

// in the professional const is pretty much always used for an array and object
