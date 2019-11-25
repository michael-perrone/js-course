// WHAT ARE CONDITIONALS
// the most common conditional is the IF statement
// start with "if" keyword
// (evaluate inside here) if evaluation is true or truthy, run what is ever inside the curly brackets

if (5 === "5") {
  // the condition must evaluate to truthy or true
  // now evaluating to false
  // 5 is equal to 5 so this evaluating true
  // if this is true... its not
  console.log("5 IS EQUAL TO 5");
}

if (10 === 2) {
  // true will always evaluate to true
  console.log("TRUE IS TRUE");
}

let myName = 100;

if (myName === "emily") {
  // obviously false becuase myName is declared above and its not fred
  console.log("yes its true, my name is FRED");
} else if (myName === "emily") {
  console.log("yes it is true, my name is now emily");
} else if (myName === 10) {
  console.log("cat");
} else {
  // ELSE ONLY RUNS IF THE INITIAL IF STATE IS NOT TRUE
  console.log("no silly willy, my name is not fred");
}

// now we are working on ELSE
// else means if the condition evaluated to false than run the else
// else if statement
// we type else if (condition) {

//}

// what is the ternary operator

let favoriteFood = "pizzdwdwdawd";

favoriteFood === "pizza"
  ? console.log("yes i absoltuely ove pizza")
  : console.log("no i dont love pizza");

// start with the conditional evaluation then you add a question mark ? if evaluation is true of condition checked
// then whatever code you write after the question mark runs
// if then initial conditional evaluation is false

if (favoriteFood === "pizza") {
  console.log("yes i absolutely love pizza");
} else {
  console.log("no i dont love pizza");
}

let myOtherName = "mike";

if (myOtherName !== "mike") {
  // now evaluates to false so wont run the console.log()
  // myOtherName is not equal to mike so this is true
  console.log("my other name is not mike"); // would not run if conditional check was === because myName is not equal to mike
}
