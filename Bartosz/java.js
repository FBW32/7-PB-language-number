// 1. Concatenation.
// Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
let introSentence = "hello, my name is Fran and I am";
let age = 25;

// Q:In this case, what is the + operator doing? Comment your answer in the js file.
console.log(introSentence + " " + age); //  hello, my name is Fran and I am 25

// AQ  + combaine two variables together.

// 2. Converting
let varOne = 1005;
let coersedVar = Number(varOne);
console.log(typeof coersedVar); // number

let varTwo = 10.50;
let coersedVar2 = Number(varTwo);
console.log(typeof coersedVar2); // number

// 3. Remain Three
// Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
let firstVar = 30;
let secondVar = 939;
let thirdVar = 40.9;

console.log(firstVar == secondVar == thirdVar); // false

console.log(firstVar + " is " + (firstVar % 2 == 0 ? "even" : "odd"));  // 30 is even
console.log(secondVar + " is " + (secondVar % 2 == 0 ? "even" : "odd")); // 939 is odd
console.log(thirdVar + " is " + (thirdVar % 2 == 0 ? "even" : "odd")); // 40.9  is odd

