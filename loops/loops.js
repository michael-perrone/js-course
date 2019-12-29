// what is a loop?
// you can iterate over arrays or array-like structures with a loop
// main loop that is used to the "for loop"
// we are creating a variable i which we set to 0 (can be set to any number)
// each little substatement is separated by a semicolon
/* for (let i = 0; i <= 10; i++) {
  console.log(i);
  console.log("dog");
}
 */
// initialize  // conditional termination  // increment
/* for (let index = 0; index != 100; index++) {
  console.log(index);
} */

// a while loop is similar to a for loop
// initialize
let i = 0;
// conditional termination
while (i <= 10) {
  // incrementing
  console.log(i);
  i = i + 1;
}

// WHAT IS THE PROBLEM HERE???
// i is always gonna be 0
// this is called an infinite
// infinite loops are not fun
