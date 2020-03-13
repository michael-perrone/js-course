// spread operator

const ourArray = [55, 8, 16, 11];

// the spread operator is just ...
// you can use the spread operator to spread out the elements of arrays

const newArray = [ourArray, 44, 5]; // [[55, 8, 16, 11], 44, 5] <= not what we wanted
// good=>[55, 8 ,16, 11, 44, 5]

console.log(newArray);

// spread will allow us to take all elements in the array and spread them out

const correctArray = [...ourArray, 44, 5];
console.log(correctArray);

const justSpread = [...ourArray];

console.log(justSpread);

//////////////////////////
////////////////////////

///////////////////////
// rest parameter

addNumbers = (...numbers) => {
  // numbers is now an array so we can use array methods
  let total = 0;
  numbers.forEach(number => {
    total += number;
  });
  console.log(numbers);
  console.log(total);
};

function mike() {
  var a = "mike";
}

addNumbers(2, 18, 4, 6, 12, 20, 11, 13, 14, 15, 6, 22, 100, 44);

// the wonderful thing about the rest parameter is that even if you dont know the amount of elements in the array
// or the amount of arguments that you are to use, you can use the rest parameter

addTwoNumbers = (a = 5, b = 3) => {
  console.log(a + b);
};

addTwoNumbers(10, 10);

// IF YOU EVER WORK IN REDUX, YOULL MOST LIKELY SEE THIS

// NaN means not a number
