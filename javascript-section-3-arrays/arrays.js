// what is an array
// an array is a group or set of anything

// a primative is not an object or an array

// undefined null booleans numbers string objects arrays

// why would we need these?

// you create an array using square brackets'

// you can put items in an array, as many as you want. by seperating each item or value with a comma

let ourArray = [];

ourArray = [
  "emily",
  "matt",
  "mike",
  "ryan",
  "nate",
  "karen",
  "sphagetti",
  "pizza"
];

console.log(ourArray);

console.log(ourArray[0]);

console.log(ourArray[2]); // this is now right

console.log(ourArray[6]);

let myBrother = ourArray[4];

console.log(myBrother);

// INDEXES IN ARRAYS
// whitespace in javascript usually doesnt matter, but in strings in definitely does
// our array has 3 values
// each value has an index
// index is very important
// the first value in an array is always going to have an index of 0
// and then from there you just add one to the previous to find the next index
// 0 1 2 3 4 etc

// how do we use an index
// you can use square brackets to pick an item out of an array using the index of that item within square brackets
// a common error that people is they count the number of values and think that is the index

// what is LENGTH
// length is just the number of values in the array

let ourVeryShortArray = [1];
console.log(ourVeryShortArray);

let ourLongArray = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  10
];

console.log(ourLongArray[ourLongArray.length - 1]);

// length can be very helpful
// you can access the length property ourLongArray.length
// you can also use the length to easily access the last item in an array

console.log(ourLongArray.length); // this will give us 36 because there are 36 items

// console.log(ourLongArray);

let anotherSillyArray = [
  "mango",
  "apple",
  "pineapple",
  "banana",
  "strawberry",
  "peacock",
  "turtle",
  "blanket",
  "sock"
];

let lastItemOfOurArray =
  anotherSillyArray[
    anotherSillyArray.length /* 9 */ - 1 /* basically just saying 8 */
  ];

console.log(lastItemOfOurArray);

// you can put other things besides primative types in arrays

let complicatedArray = [
  "food" /* first item which has index of 0 in our Array */,
  "water",
  "air",
  ["bed", "blanket", "pillow", ["hat", "shorts", "shirt"]]
];

// here we put other arrays inside of our main array

console.log(complicatedArray[3][3][3]);

let errorArray = ["hello"];

console.log(errorArray[1]);

// we have access to the array at index 3
// we can add another pair of brackets to now reach inside the next array since we are already inside the 1st array
