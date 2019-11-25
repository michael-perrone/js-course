// COMPARING EQUALITY

// ===

let newNumber = 5;
let newString = "mike";
newNumber = 10; // since its a single equals sign... were actually reassigning the value

// when you are comparing values, you use triple equals most of the time. and occasionally you can use double equals

/* console.log(newNumber === 5); // will give us true
console.log(5 === 6); // will give us false
console.log(newString === "mike"); // will give us true */

// console.log((newString = "matt")); // this is bad. you do not want to change the value of a variable inside console.log

// when using === (triple equals) you will get a true or false

//let tomato = newString === "mike";

// console.log(tomato);

// there is something called double equals (==)
// what is the difference between === and ==
// the difference is double equals does not check for primative type and triple equals does

//console.log("5" === 5);
// the type of '5' is string
// the type of 5 is number

//console.log("5" == 5);
// you do not want to use double equals unless absolutely neccesary
// it can create some really nasty bugs
// this will give us true
// thats because double equals doesnt check for type

// console.log("27" == 27);
/* 
console.log(1 == true); // will give us true
console.log(2 == true); // will also give us false

console.log(0 == false); // will also give us true

console.log(true == "1");

console.log(true === "1"); // this is the only one that returns false

console.log(false == "0");
 */

// what is the not operator

// the not operand is the exclamation point "!"

// console.log(!true === true); // evaluating to false

// console.log(!true);

// there is two types of not equal checks
// 1. which you should pretty much ALWAYS use is "!==" "==="
// 2. which you should hardly ever use similar to "==" "!="

// console.log(1 != true);
// will evaluate to false because 1 == true
// this does not check for type

// console.log(1 !== true);
// will evaluate to true

console.log(!!true === !!true);
