// COMMENTS
// -you can type a comment two ways. by using // (which is single line)
/*  this is the other way to write a comment
    you use dash star to write a multi-line comment
*/

// VARIABLE
// variables store little bits of information in something called memory
// there is three words you can use to create a variable
// they are var, let, and const

/*
let ourFirstVariable = "hello my name is mike";

let ourHeader = document.querySelector("h1");

ourHeader.textContent = ourFirstVariable;
*/

// PRIMITIVE TYPES

// data types or values that you can use in javascript
// you can set variables to these
// there are six of them
// the five important primitive values or data types string, boolean, number, undefined, null

// what is a string
// a set of characters wrapped in quotation marks
// a string can also be wrapped in single quotes

// what is a boolean
// a boolean is just a true or false statement

/* let ourFirstBoolean = true;
let ourSecondBoolean = false; */

// what is a number
// you can use all mathematical operators
// modulus is the percent sign (%)
// you use the modulus to get the remainder when doing division

/* let firstNumber = 30;

let secondNumber = 11;

let result = firstNumber % secondNumber;

let header = document.querySelector("h1");

header.textContent = result; */

// result is actually going to be equal 5

// okay 12 / 7 = 1 and something else
// okay 20 / 8 = 2 (dont worry about 2) and something else
// 4/8 is remaining after 8 goes into 20 twice
// 11 goes into 30 twice to get us 22 which means 8/30 is remainder
// what is that something else
// 5/7 the modulus is the numerator of the remainer

// what is undefined

/* let favoriteFood = "spaghetti";

let mike = undefined;

let header = document.querySelector("h1"); // what is this mike?
header.textContent = mike; */

// this is actually not an error but it really doesnt do too much for us in javascript
// console.log() allows us to check what a variable or something else in the browser

/* let myName = "Mike";

console.log(myName);

console.log(1);
console.log(undefined); */

// tricky things with primative types

// you can add strings together

let firstName = "mike";
let lastName = "perrone";
//console.log(firstName + lastName);
/* console.log(typeof firstName);
console.log(typeof 1);
console.log(typeof "spaghetti");
 */

//console.log(firstName - lastName);
/* 
console.log(typeof ("5" - "4"));
console.log("5" - "4"); */

/* let potato = "6";
let cat = "7"; */

/* console.log(potato * cat);

console.log(typeof "5" - "4");
 */

// let actuallyBeFinalVariable = typeof 5;
// console.log(actuallyBeFinalVariable);

// console.log("number" === typeof 5);

// let finalVariable = typeof "number";

//console.log(finalVariable);

// typeof is just going to give us the primative type

// let newNumber = "10" - "7";

// console.log(newNumber);

// this is giving us a number

// this gives us 1 in the browser

// what is NaN
// not a number

// REASSIGNING AND ASSIGNING VARIABLES
// you use the let keyword to assign a variable
// as we said earlier, you can also use var and const (we will get back to these later)
// you can reassign variables value, but you do this but telling javascript to change the value with an ='s
// without using let or var or const

/* let ourHeader = document.querySelector("h1");

let ourSecondHeader = document.querySelector("h2");

let hello = "i am michael";

ourSecondHeader.textContent = hello;

hello = "i like pizza";

ourHeader.textContent = hello; */

// let ourString = dwdwd;
