// Strings and Numbers

/* 1. Concatenation.
Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number. */
let introSentence = "hello, my name is Fran and I am";
let age = 25;
console.log(introSentence + " " + age);
// + operator joins the two strings

/* 2. Converting
Create a variable with the value of "1005". Convert it to a number.
Create a variable with the value of "10.05". Convert it to a number. */
let myValue = "1005";
let coersedValue = Number(myValue);
console.log(typeof coersedValue); // number

let myValue1 = "10.05";
let coersedValue1 = Number(myValue1);
console.log(typeof coersedValue1); // number

/* 3. Remain There
Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.

30
939
40.9 */
let number1 = 30;
let answer1 = (number1 % 2 === 0) ? "even" : "odd";
console.log(`${number1} is  ${answer1}`); // 30 is  even
let number2 = 939;
let answer2 = (number2 % 2 === 0) ? "even" : "odd";
console.log(`${number2} is  ${answer2}`); // 939 is  odd
let number3 = 40.9;
let answer3 = (number3 % 2 === 0) ? "even" : "odd";
console.log(`${number3} is  ${answer3}`); // 40.9 is odd
 

