// array javascript methods
// method is something that can be called similar to a function

// .join() array method

let myNewArray = ["Hello", "my", "name", "is", "Petunia"];

let stringToBeReturned = myNewArray.join("");
console.log(stringToBeReturned);

let stringToBeReturnedWithSpaces = myNewArray.join("284248274");

console.log(stringToBeReturnedWithSpaces);

// .join converts an array into a string and its parameter is the separator
// the separator can be any set of either a single or multiple characters that will be plugged in inbetween elements
// if you use empty quotes, there will be no space or separator
// if you put nothing inside the () each element is separated by a comma but still creates on string

/////////////////////////////////////////////
////////////////////////////////////////////

// .pop array method()

let ourNewestArray = ["Hello", "there", "everyone"];

let elementThatWasPopped = ourNewestArray.pop();

console.log(elementThatWasPopped);

console.log(ourNewestArray);

// pop removes the last element inside of an array
// its a bit of a gotcha
// ??? it doesnt return a new array like most methods and it actually alters the array that the method was performed on
// what is returned?? element that was popped

////////////////////////////////////////////
////////////////////////////////////////////

// .push array method
// i want an array that has characters 1-100

let toughToNameArray = [];
for (let i = 1; i <= 100; i++) {
  //  console.log(toughToNameArray.push(i));
}

console.log(toughToNameArray);

// .push adds an element to the end of the array
// you specify this element  as the parameter in .push()

let name = ["mike"];

let lastName = "perrone";

let newLengthOfArray = name.push(lastName);

console.log(name);

console.log(newLengthOfArray);

////////////////////////////////////////////////
////////////////////////////////////////////////

// .unshift array method
// it adds the element to the FRONT of the array
// it adds whatever your parameter is as the element just like push

let anotherNewNewArray = [];

for (let otherIndex = 1; otherIndex <= 100; otherIndex++) {
  anotherNewNewArray.unshift(otherIndex);
}

console.log(anotherNewNewArray);

// unshift is opposite of push
// does unshift alter original array? yes!!!!!

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// shift()

let oneMoreArray = [1, 2, 3, 4, 5];

oneMoreArray.shift();

// return the removed element from the array
// it will alter the original array

console.log(oneMoreArray);

////////////////////////////////////////////
///////////////////////////////////////////

// forEach

// forEach will take a callback function that has 3 parameters
// value
// index

function willBeCallBack(element, index){
    if (element === "potato") {
      element = element + " salad"
    }
   // console.log(element)
   console.log(index, element)
}

let newArray123 = ["potato","sundae","pizza","icecream","tulip","chocolate","syrup","milkshake"];

newArray123.forEach(willBeCallBack)

 for (let i = 0; i < newArray123.length; i++) {
  if (newArray123[i] === "potato") {
    newArray123[i] = newArray123[i] + " salad"
  }
  // console.log(newArray123[i])
}
 
// so a forEach array method is really the same as a for loop



////////////////////////////////////////////////
////////////////////////////////////////////////

// map array method
// 

let mappedArray = newArray123.map(function(value, index) {
  return value + " is tasty" + index
})

let names = ['mike', 'jimmy', 'lola', 'sara'];

console.log(mappedArray)


////////////////////////////////////////
////////////////////////////////////////////

// filter array method
// filter is a very easy way to remove items from an array, if you know the value of the item
// that you need to remove

let arrayThatWillBeFiltered = [3, 7, 11, 3, 14, 6, 28000, 1];

let filteredArray = arrayThatWillBeFiltered.filter(function(value, index) {
   // return value !== 3
   return index !== 1 && index !== 2;
})

// i made a mistake here
// i said index !== 11

console.log(arrayThatWillBeFiltered)

console.log(filteredArray)

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// .reduce() array method

let oneOfOurLastArrays = ["pie ","tommy ","apple ","fruit ","berry ","candy "]; // the sum of these is 55


// the return value of the callback function is the accumlated result
let num = oneOfOurLastArrays.reduce(function(accumulator, currentValue, index) {
  return accumulator + currentValue;
  
})

console.log(num)


///////////////////////////////
////////////////////////////////

// find

let lastArray = [6, 22, 105, 11, 45, 101,60, 1, 1, 1];

/* let isSignedUp = lastArray.find(function(element, index) {
  return element === "email1"
})

console.log(!!isSignedUp) */


////////////////////////////
////////////////////////////

// SORT CHANGES THE ORIGINAL ARRAY AND YOU CAN USE THE GREATER AND LESS THAN TO SORT THE ARRAY

lastArray.sort(function(a,b) {
  return a > b;
})

console.log(lastArray)







