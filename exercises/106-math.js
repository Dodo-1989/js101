// Let's do some grade-school math.
// Actually: let's have the computer do the math for us :)
// This page may be helpful for this exercise:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Create a function "add99" that takes one argument and adds the number 99 to it.
// You can assume that the argument passed in will be a number value.

function add99 (num){
return num + 99
}
add99(129)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Create a function "sum" that takes 2 arguments and sums them together.
// Assume that both arguments are numbers.
function sum (a, b){
    return a + b
}
sum (5, 6)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Create a function "difference" that takes 2 number arguments and returns their
// difference.
// ie: the second number substracted from the first number
function difference (a, b){
    return b - a 
}
difference (10, 20)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Create a function "multiply" that takes 2 number arguments and returns their
// product.
function multiply (a, b){
    return a * b
}

multiply (10, 10)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Create a function "divide" that takes 2 number arguments and returns the
// division of the first argument by the second.

function divide (a, b){
return a / b
}
divide (100, 10)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The modulus operator (%) works like remainder from division.
// Create a function "mod" that takes 2 number arguments and returns the
// remainder of the first divided by the second.
function mod (a, b){
return a % b
}
mod (100, 2)