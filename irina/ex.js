// Strings and Numbers

// 1. Concatenation. 
// Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.


let introSentence = "hello, my name is Fran and I am";
let age = 25;
console.log(introSentence + " "+ age);// hello, my name is Fran and I am 25 ->> in this case the + sign is combining two variables, string and number.


let str = "hello";
let num = 50;
console.log(str + " " + num); 
//or
console.log(`${str} ${num}`);

// 2. Converting 

//create a new variale and add String(), Number(), Boolean()  before the variable that you want to convert

// Create a variable with the value of "1005". Convert it to a number.
let num1 = "1005"
console.log(typeof num1); // string
let num2 = Number(num1);
console.log(typeof num2); //number

// Create a variable with the value of "10.05". Convert it to a number. 
let num3 = "10.05"
console.log(typeof num3); // string
let num4 = Number(num3);
console.log(typeof num4); //number

// 3. Remain There
//https://css-tricks.com/snippets/javascript/check-if-number-is-evenodd/
//https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-5.php


// Check if the following numbers are even numbers. Use a ternary and if the number is even print `30 is even`, else print that it is odd.
// * 30
// * 939
// * 40.9

let num5 = 30;
console.log(num5 % 2 === 0);  // true
console.log(num5 + " is even"); // 30 is even
let num6 = 939;
console.log(num6 % 2 === 0);  // false
console.log(num6 + " is odd"); // 939 is odd

let num7 = 40.9;
console.log(num7 % 2 === 0);  // false
console.log(num7 + " is odd"); // 40.9 is odd