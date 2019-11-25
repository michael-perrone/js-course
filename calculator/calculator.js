// document object model DOM
// getting an element on the document and we are going to use its html id to do that

let numberOnScreen = document.getElementById("numberOnScreen");

console.log(numberOnScreen);
let firstNum;
let secondNum;
let result;
let numAfterResult;
let operatorChosen = "";

function getNumber(num) {
  if (firstNum === undefined) {
    firstNum = num; // not triple equals because thats checking equality
    // we are using single equals because we are reassigning the value of firstnum
    numberOnScreen.innerText = firstNum;
  } else if (secondNum === undefined) {
    secondNum = num;
    numberOnScreen.innerText = secondNum;
  } else {
    numAfterResult = num;
    numberOnScreen.innerText = numAfterResult;
  }
}

function getOperand(operator) {
  operatorChosen = operator;
}

function doCalculation() {
  if (
    firstNum !== undefined &&
    secondNum !== undefined &&
    result === undefined
  ) {
    if (operatorChosen === "+") {
      result = firstNum + secondNum;
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
}
