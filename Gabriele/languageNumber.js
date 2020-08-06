/* 1. Concatenation.
Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number. */

let introSentence = "hello, my name is Fran and I am";
let age = 25;

let outputBe = (introSentence + " " + age);
console.log(outputBe);

/* In this case, what is the + operator doing? Comment your answer in the js file.

My Answer: In this case the + operator is creating the concatenation */ 


/* 2. Converting
Create a variable with the value of "1005". Convert it to a number.
Create a variable with the value of "10.05". Convert it to a number. */

let var1 = "1005";
let coersedStr = Number(var1);
console.log(typeof coersedStr); // Number


let var2 = "10.05";
let coersedStr2 = Number(var2);
console.log(typeof coersedStr2); // Number

/* 3. Remain There
Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd. */ 

let var3 = 30;
let var4 = 939;
let var5 = 40.9;
console.log(var3 % 2 === 0);  // true
console.log(var4 % 2 === 0);  // false
console.log(var5 % 2 === 0);  // false

console.log(var3 + " is even"); // 30 is even
console.log(var4 + " is odd"); // 939 is odd
console.log(var5 + " is odd"); // 40.9 is odd


