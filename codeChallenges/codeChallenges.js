// CODE CHALLENGES

// Code Challenge #1: Mild

// Write a JavaScript program that defines a variable that stores a Number. 
// The program should print out the String "even" if the Number is even, and the String "odd" if the Number is odd. 
// Hint: You may need to do some extra research on the remainder operator (%) to solve this challenge.

var number = 13

if (number % 2 === 0) {
    console.log("Even")
} else {
    console.log("Odd")
}

// Code Challenge #2: Medium

// Using the following variables:

var goodDrivingRecord = true;
var age = 30;

// Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:
// - If the driving record is good and user is over 25 years old, they should get a discount on the car rental
// - If the user either has a good record or is over 25 years old, they should pay full price
// - If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental

if (goodDrivingRecord === true && age > 25) {
    console.log("You are approve for a car rental, and elligible for a discount!")
} else if (goodDrivingRecord === true || age > 25) {
    console.log("You are approved for a car rental!")
} else { 
    console.log("Unfortunatley, you are not elligible for a car rental.")
}

// Code Challenge #3: Spicy

// Write a JavaScript program that prints out a String or Number: 
// The printed value will depend on the value of a Number. 
// - If the Number is a multiple of 3, print "Fizz". 
// - If the Number is a multiple of 5, print "Buzz". 
// - If the Number is a multiple of both 3 and 5, print "FizzBuzz". 
// - If the Number is not a multiple of either, print the Number itself.

var number = 106

if (number % 3 === 0 && number % 5 !== 0) {
    console.log("Fizz")
} else if (number % 5 === 0 && number % 3 !== 0) {
    console.log("Buzz")
} else if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz")
} else {
    console.log(`${number}`)
}