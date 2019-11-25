// WHAT IS A FUNCTION
// a function does something or returns something
// creating our first function
// how do we do this???
// keywords cannot not be used as variable names
// use the function keyword and then name function
// add () after the function name
// the way you use a function and run the code inside that function is by calling the function
// another word for calling a function is invoking

// we are returning something from a function now

function writeSomething() {
  // console.log("sphagetti");
}

writeSomething();

function addNumbers() {
  let firstNumber = 3;
  let secondnumber = 4;
  let lastNumber = firstNumber + secondnumber;
  return lastNumber;
  // let thirdnumber = 2;     this code is unreachable because of return statement above
  // console.log(thirdNumber);
}

// console.log(addNumbers()); // when you are returning a value from a function, the function invocation
// is now equal to whatever was returned

/* console.log(typeof addNumbers());

function basicFunction() {
  let hello = "hi";
  return hello;
}

console.log(typeof basicFunction);
 */

let favoriteFood = "pizza";
console.log(favoriteFood);

function ourFunction() {
  // called a function declaration
  // do whatever we want in here
  console.log("hi im emily");
}
ourFunction();
// hoisting which is a more advanced topic
// hoisting when it comes to function expressions vs declarations

let ourOtherFunction = function() {
  // this right here is called a function expression
  console.log("hi im mike");
};

ourOtherFunction();

// parameters
// little helpers inside of functions
// they help you transfer information
// arguments and parameters are interchangable
// you name the parameters inside the () in the function
// you can have as many paremeters as youd

function writeFavoriteFood(favoriteFood) {
  console.log("My Favorite Food is " + favoriteFood);
}

writeFavoriteFood("pineapple");

let writeFavoriteNumber = function(favNum) {
  console.log("My favorite number is " + favNum);
};

writeFavoriteNumber(8);

function subtractNumbers(numOne, numTwo) {
  console.log(numOne, "THIS IS NUMONE");
  console.log(numTwo, "THIS IS NUMTWO");
  // two parameters // you have to separate these parameters with commas
  return numOne - numTwo;
}

let result = subtractNumbers(10, 7); // RESULT = 3

console.log(result, "THIS IS RESULT");
