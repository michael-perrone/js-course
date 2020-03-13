// let and const are just a new way of delcaring variables
// pretty much using let to declare variables in javascript is the standard now

let ourVariable = "mike";
ourVariable = "jake";
// let ourVariable = "jake";
console.log(ourVariable);
// if ur working in a team of people, that error is a great error.
//

var otherVariable = "chris";
var otherVariable = "samantha";
console.log(otherVariable);
///////////////////////////////////
///////////////////////////////////

// let is totally block scoped

if (true) {
  let myName = "mike";
  console.log(myName);
}

// console.log(myName);

if (!false) {
  var friendsName = "jake";
}

console.log(friendsName);

for (let i = 0; i < 10; i++) {
  let tomato = i + 1;
  console.log(tomato);
}

for (let z = 0; z < 10; z++) {
  var tomatp = z + 1;
}

function myFunction() {
  var friendsName = "ryan";
  console.log(friendsName);
}

myFunction();

console.log(friendsName);

{
  let name = "jack";
}
console.log(name);
////////////////////////////////////
////////////////////////////////////

// const
// const stands for constant

const favoriteNumber = 23;

// this is not allowed ====> favoriteNumber = 22;

console.log(favoriteNumber);

// const favoriteFood; // why would someone create a variable using const knowing they can never change it

const newNumber = favoriteNumber * 2;
console.log(newNumber);

const ourConstantArray = [1, 2, 3, 4, 5];

ourConstantArray.push(6);

console.log(ourConstantArray);

const myFavoriteObject = {
  favoriteFood: "pizza"
};

myFavoriteObject.favoriteColor = "yellow";

console.log(myFavoriteObject);
