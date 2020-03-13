/// what is destructuring
// just makes syntax of objects and arrays a little simpler

// array destructuring

const arrayToBeDestructured = [4, 6, "tomato"];

let [numberFourVar, secondElement] = arrayToBeDestructured;

console.log(numberFourVar);

console.log(secondElement);

////////////////////////////////////////////
///////////////////////////////////////////

// object destructuring

let ourObject = {
  age: 25,
  hair: {
    color: "brown",
    length: {
      distance: "long",
      actualLength: "5 inches"
    }
  }
};

// object destructuring pulls out the value from a property that you specify with a matching name based
// on the property you want and sets to a variable with the same name

ourObject.hair.length.actualLength;

let { actualLength } = ourObject.hair.length;

console.log(actualLength);

//////////////////////////////////////
///////////////////////////////////////
