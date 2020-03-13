// what is an arrow function =>
// an arrow function and regular function pretty much do the same thing

ourArrowFunction = () => {
  console.log("OUR FIRST ARROW!!");
};

ourArrowFunction();
console.log(ourArrowFunction);

console.log(typeof ourArrowFunction);

//////////////////////////////
/////////////////////////////

ourNextArrowFunction = (name, age) => {
  console.log(`Hello my name is ${name} and Im ${age} years old.`);
};

ourNextArrowFunction("Mike", 25);

// ONE OF THE WEIRD THINGS ABOUT ARROWS
// IF THERE IS ONE PARAMETER... THE PARAMETER DOES NOT NEED ()
/// REMEMBER ONLY ONE PARAMETER
// two parameters three and beyond
// or 0

//////////////////////////////////////
//////////////////////////////////////

ourLastArrowFunction = (a, b) => a + b;

ourAnotherLastArrowFunction = (a, b) => a + b; // this is equivalent to what is above

console.log(ourAnotherLastArrowFunction(4, 4));

console.log(ourLastArrowFunction(5, 5));

const arrayForArrow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// usually when mapping you dont need the index
// map only has 1 parameter thats the callback function
// but the callback function can contain multiple parameters
const returnedArray = arrayForArrow.map(element => element * 2);

console.log(returnedArray);
