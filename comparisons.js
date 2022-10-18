// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true

console.log("is numberTeachers less than numberStudents?", numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false

console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);


// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true

console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true

console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20)

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false

console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21)

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true

console.log("Is numberStudents less than or equal to 20?", numberStudents <=20)

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true

console.log("is numberStudents less than or equal to 21?", numberStudents <=21)

// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// This line of code will log the result of comparison: "is 4 less than 9?"" The comparison will evaluate this as true.

var books = 3;
console.log(4 < books);
// The first line of code establishes the variable "books" as the number 3.
// The second line of code will log the result "is books greater than 4?" Or, is the value of the number variable books greater
// than 4. This comparison will evaluate as false, because the value of the variable books (3) is less than 4.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// The first line of code establishes the variable "friends" as the number 6. 
// The second line of code establishes the variable "siblings" as the number 2.
// The third line of code will log the result "is friends greater than siblings?" Or, is the value of the friends variable greater
// than the value of the siblings variable.
// The third line of code will evaluate in the condole as true, because the value of the friends variable (6) is greater than 
// the the value of the siblings variable (2).

var attendees = 9;
var meals = 8;
console.log(attendees != meals);
// The first line of code establishes the variable "attendees" as the number 9.
// The second line of code establishes the variable "meals" as the number 8.
// The third line of code will log the result "is attendees not equal to meals" Or, is the value of the attendees variable not
// equal to the value of the meals variable.
// The third line of code will evaluate in the console as true, because the value of the attendees variable (9) is not equal to
// the value of the meals variable (8)

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats

console.log("Does the dog love to play and love treats?", lovesToPlay && lovesTreats)

// Determine if the dog loves to play and loves the dog park

console.log("Does the dog love to play and love the dog park?", lovesToPlay && lovesDogPark)

// Determine if the dog loves to play or loves the dog park

console.log("Does the dog love to play or love the dog park?", lovesToPlay || lovesDogPark)

// Determine if the dog loves to play and is a puppy

console.log("Does the dog love to play and is the dog a puppy?", lovesToPlay && age < 2)

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:  The final line of code evaluated as true. This is because the variable lovesToPlay is true, and the value of the
// variable age is 1, which is less than 2.