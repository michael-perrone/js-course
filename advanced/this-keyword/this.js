/// what is the this keyword
// this in a global environment is the window object
// also if you use this in a function... its once again the window object

console.log(this);

let favoriteFood = "tomatos";

function printFavoritefood() {
  console.log(`My favorite food is ${this.favoriteFood}`);
}

// printFavoritefood();

/////////////////////////////////////////////////////////////////

let ourNewObject = {
  // hairColor: "black",
  //favoriteColor: "green",
  favoriteNumber: 8,
  // printHairColor: function() {
  //  console.log(this.hairColor);
  // console.log(this);
  //},
  //printFavoriteColor: function() {
  // console.log(`My favorite color is ${this.favoriteColor}`);
  //},
  getFavoriteNumber: function(a, b) {
    // if function keyword is used right away.. it would access this keyword... arrow not the same
    return function() {
      console.log(this);
      this.favoriteNumber = a + b;
      // window.favoriteNumber = a + b;
      // var favorite = a + b
    };
  }
};

// could be some type of closure if a function returns another function
// when using an anonymous arrow function in a method inside of an object... you dont get the same value for the
// this key word as you would if you were using a regular function
// a and b are variables that we have access to through closures

console.log(ourNewObject.anything);

//ourNewObject.printHairColor();
//ourNewObject.printFavoriteColor();
ourNewObject.getFavoriteNumber(2, 2)();
// console.log(ourNewObject.favoriteNumber);

///////////////////////////////////////////
///////////////////////////////////////////

// closures

function firstFunction() {
  return function() {
    console.log("hello");
  };
}

firstFunction()();

/////////////////////////
/////////////////////////
// a closure is a value that is used inside an inner function created by an outter functon or method

function ourFirstClosure() {
  var a = 2;
  console.log(a);
  function secondFunction() {
    var b = 3;
    console.log(b);
    function thirdFunction() {
      var c = 4;
      console.log(c);
    }
    thirdFunction();
    console.log(c)
  }
  secondFunction();
}

ourFirstClosure();
