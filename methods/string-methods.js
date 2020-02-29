// so when using a string a method // YOU NEED A STRING!!!
// remember these are methods that javascript provides

let ourVariable = "Michael";

// charAt() gives you the character at the index inside of a chosen string

console.log(ourVariable.charAt(6));

/////////////////////////////////////////
/////////////////////////////////////////

// concat() combines two strings together

let ourSecondVariable = "Pizza";

let concattedString = ourVariable.concat(" ", ourSecondVariable); // concat does join the strings, but it doesnt alter the original string
console.log(concattedString); // it does alter the new string
// above we are creating a new variable and setting it equal to the what the concat method returns

console.log(ourVariable);

/////////////////////////////////////
/////////////////////////////////////

// substr() // does not alter original string, but returns new value that can be assigned to a variable

let choppedString = concattedString.substr(8, 5);

console.log(choppedString);

// substring() // does not alter the original

let subStringString = concattedString.substring(2, 10);
console.log(subStringString);

// how do i know what alters the original string and what doesnt?
// memorize :(

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// toLowerCase()

let caps = "DWJDAWDKAWJHDAJHSDJHASDJHQWJHDWEKFJHWF";

console.log(caps.toLowerCase());

// email and password
// email in databse
// and email your entering wil have no capitalization

// email: Mike@gmail.com  // some phones automatically captalize the m

// you love this app !!! its amazing

// mike@gmail.com

// IT DOESNT WORK :((((

// NOOO never do this on password

// ChewbaccaISAWESOME!!!

////////////////////////////////////////
////////////////////////////////////////

let lower = "dwdwdwd";
lower.toUpperCase();

// makes everything capitalized

///////////////////////////////////////
///////////////////////////////////////

let ourBrandNewString = "Hello I am a brrand new string";

// the split() method
// it helps transform our string here into an array
// if we add no parameters to split()
// its gonna return the whole string as one element in an array

//let splitString = ourBrandNewString.split();

// console.log(splitString);

let anotherSplitString = ourBrandNewString.split("");
// split with empty "" NOTHING INSIDE will return an array with each individual character of that string becoming an element in an array

console.log(anotherSplitString);

let lastSplitString = ourBrandNewString.split(" ");
console.log(lastSplitString);
