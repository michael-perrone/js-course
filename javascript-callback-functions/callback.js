// what is a callback function
// in computer programming, a callback is basically a function that gets executed by another function through a parameter


function sayHI() {
    console.log('say hi')
}

function sayHiAlso(sayHiFunction) {
    sayHiFunction()
}

sayHiAlso(sayHI)

// what is an anonymous function
// an anonymous function is just a function that does not have a name


function willConsoleLogNumbers(functionThatReturnsNumbers) {
    console.log(functionThatReturnsNumbers(8, 6))
}

willConsoleLogNumbers(function(b,z) {
    return b + z
})

