// **************Exercise 7  - Strings and Numbers************

// #### 1. Concatenation.
// * Create two variables. One variable should contain a string value and the
// other should contain a number. Concatenate the string and the number.
// ```javascript
// let introSentence = "hello, my name is Fran and I am";
// let age = 25;
// ```

let introSentence = "hello, my name is Fran and I am";
let age = 25;

console.log(introSentence + " " + 25); // hello, my name is Fran and I am 25

// In this case, what is the `+` operator doing?
// Comment your answer in the js file.

// The `+` operator is turning the number into a string.

// #### 2. Converting
// * Create a variable with the value of "1005". Convert it to a number.
// * Create a variable with the value of "10.05". Convert it to a number.

let var1 = "1005";
console.log(typeof Var1); // string

let var1Converted = Number(var1);
console.log(var1Converted); // 1005
console.log(typeof var1Converted); // number

let var2 = "10.05";
console.log(typeof var2); // string

let var2Converted = Number(var1);
console.log(typeof var2Converted); // number

// #### 3. Remain There
// Check if the following numbers are even numbers.
// Use a ternary and if the number is even print `30 is even`,
// else print that it is odd.
// * 30
// * 939
// * 40.9

let num1 = 30;
console.log(num1 % 2 === 0); // true
let oddEven1 = num1 % 2 === 0 ? "30 is even" : "30 is odd";
console.log(oddEven1); // 30 is even

let num2 = 939;
console.log(num2 % 2 === 0); // false
let oddEven2 = num2 % 2 === 0 ? "939 is even" : "939 is odd";
console.log(oddEven2); // 939 is odd

let num3 = 40.9;
console.log(num3 % 2 === 0); // false
let oddEven3 = num3 % 2 === 0 ? "40.9 is even" : "40.9 is odd";
console.log(oddEven3); // 40.9 is odd
