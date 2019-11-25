// document object model DOM
// getting an element on the document and we are going to use its html id to do that

let numberOnScreen = document.getElementById("numberOnScreen");

console.log(numberOnScreen);
let firstNum;
let secondNum;
let result;
let numAfterResult;
let operatorChosen = "";
let firstNumEntered = false;
let secondNumEntered = false;
let numAfterResultEntered = false;

// if firstNum has no value so we have not hit any buttons
// firstNum to be equal to whatever button we hit
// so if not operator hit, we want firstNum to be equal to the last number hit on calculator as a string
// plus the next number hit
// we need to find the right place to make firstNumEntered true

function getNumber(num) {
  if (firstNumEntered === false) {
    if (firstNum === undefined) {
      firstNum = num; // not triple equals because thats checking equality
      // we are using single equals because we are reassigning the value of firstnum
    } else {
      firstNum = firstNum + num;
    }
    numberOnScreen.innerText = firstNum;
  } else if (secondNumEntered === false) {
    if (secondNum === undefined) {
      secondNum = num;
    } else {
      secondNum = secondNum + num;
    }
    numberOnScreen.innerText = secondNum;
  } else {
    if (numAfterResult === undefined) {
      numAfterResult = num;
    } else {
      numAfterResult = numAfterResult + num;
    }

    numberOnScreen.innerText = numAfterResult;
  }
}

function getOperand(operator) {
  // when u hit an operator button on calculator, that means you are done entering firstNum
  if (firstNumEntered === false && firstNum !== undefined) {
    firstNumEntered = true;
  }

  operatorChosen = operator;
}

// we have strings and we dont want them anymore
// we cant do real calculations with strings

function doCalculation() {
  if (
    firstNum !== undefined &&
    secondNum !== undefined &&
    result === undefined
  ) {
    if (operatorChosen === "+") {
      result = parseInt(firstNum) + parseInt(secondNum);
      numberOnScreen.innerText = result;
    } else if (operatorChosen === "-") {
      result = firstNum - secondNum;
      numberOnScreen.innerText = result;
    } else if (operatorChosen === "*") {
      result = firstNum * secondNum;
      numberOnScreen.innerText = result;
    } else if (operatorChosen === "/") {
      result = firstNum / secondNum;
      numberOnScreen.innerText = result;
    }
  } else if (result !== undefined) {
    if (operatorChosen === "+") {
      result = result + numAfterResult;
      numberOnScreen.innerText = result;
    } else if (operatorChosen === "-") {
      result = result - numAfterResult;
      numberOnScreen.innerText = result;
    } else if (operatorChosen === "*") {
      result = result * numAfterResult;
      numberOnScreen.innerText = result;
    } else if (operatorChosen === "/") {
      result = result / numAfterResult;
      numberOnScreen.innerText = result;
    }
  }
}

// this is a nested if statement
// a nested if statemenet is just when one if statement is inside the other
// the inside if statement will only run if the if statement on the outside is true

function clearAll() {
  firstNum = undefined;
  secondNum = undefined;
  numAfterResult = undefined;
  result = undefined;
  operator = "";
  numberOnScreen.innerText = 0;
  firstNumEntered = false;
  secondNumEntered = false;
  numAfterResultEntered = false;
}

// my thinking is that we should use strings instead of numbers to get the initial number
// because if we add strings that are numbers together
// if it gives us the desired result

// 1 + 2 = 3

// '1' + '2' = '12'
