
// 1. Concatenation
let introSentence = "hello, my name is Fran and I am";
let age = 25;
// Output:
console.log(introSentence + " " + age)
//OR
console.log(`${introSentence} ${age}`);

// 2. Converting
// Create a variable with the value of "1005". Convert it to a number.
 let num1 = 1005
console.log(num1); //this is already a Number
let num2 = "1005" //-----> to convertit to number
num3 = Number(num2);
 console.log(num3);
// Create a variable with the value of "10.05". Convert it to a number.
let num4 = 10.05;
let num5 = Number(num4);
console.log(num5);
console.log(typeof num5)

//3. Remain There
// Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.

// 30
let evenx = "is Even";
let oddx = "is Odd";
let x1 = 30;
console.log(x1 % 2 == 0); //--> true
console.log(x1, evenx);
// 939
let x2 = 939;
console.log(x2 % 2 == 0); //--> false
console.log(x2, oddx);

// 40.9
let x3 = 40.9;
console.log(x3 % 2 == 0); //--> false
console.log(x3, oddx);