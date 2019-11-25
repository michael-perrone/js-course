// WHAT IS AN OBJECT????
// objects are a single or multiple sets of key value pairs
// we create an object similar to how we create other variables
// to create an object you use the curly brackets
// you separate key value pairs in an object with a comma
// you start by typing the key and the key will somewhat represent a variable
// the key is actually a property
// properties can be equal to objects strings arrays number booleans undefined null
// objects inside of objects have their own properties but are also a property themselves

let mike = {
  smart: true,
  pretty: true,
  tall: false,
  height: 5.11,
  favoriteMovies: ["Star Wars", "SpaceJam"],
  hair: {
    long: false,
    dark: true,
    soaps: {
      shampoo: "loreal",
      bodysoap: "dove"
    }
  }
};
console.log(mike.hair);
console.log(mike.hair.soaps.shampoo);
console.log(mike.favoriteMovies[0]);
console.log(mike.smart);
console.log(mike.height);
let matt = {
  smart: true,
  pretty: "eh",
  tall: true,
  height: 5.11
};

console.log(mike);

console.log(matt);

// console.log(typeof console);

console.log(console);

console.log(console.name);

// how do we access these individual properties
// you access each property by stating the property name after the object name with a dot inbetween
