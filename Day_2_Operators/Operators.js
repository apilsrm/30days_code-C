// Task 1: Write a program to add two numbers and log the result to the console.
let a = 10;
let b = 5;
let sum = a + b;
console.log(`Sum: ${sum}`); // Output: Sum: 15

// Task 2: Write a program to subtract two numbers and log the result to the console.
let difference = a - b;
console.log(`Difference: ${difference}`); // Output: Difference: 5

// Task 3: Write a program to multiply two numbers and log the result to the console.
let product = a * b;
console.log(`Product: ${product}`); // Output: Product: 50

// Task 4: Write a program to divide two numbers and log the result to the console.
let quotient = a / b;
console.log(`Quotient: ${quotient}`); // Output: Quotient: 2

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let remainder = a % b;
console.log(`Remainder: ${remainder}`); // Output: Remainder: 0

let rem = 50 % 3;
console.log(`Remainder: ${rem}`); // Output: Remainder: 2


// Activity 2: Assignment Operators **********************************

// Task 6: Use the += operator to add a number to a variable and log the result to the console.
let c = 20;
c += 10;
console.log(`c after += 10: ${c}`); // Output: c after += 10: 30

// Task 7: Use the -- operator to subtract a number from a variable and log the result to the console.
let d = 15;
d--;
console.log(`d after --> ${d}`); // Output: d after --> 14

// Activity 3: Comparison Operators***********************

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
let e = 7;
var f = 12;
console.log(`e > f: ${e > f}`); // Output: e > f: false
console.log(`e < f: ${e < f}`); // Output: e < f: true

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
console.log(`e >= f: ${e >= f}`); // Output: e >= f: false
var f = 7;
console.log(`e <= f: ${e <= f}`); // Output: e <= f: true

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let g = "7"; // string
console.log(`e == g: ${e == g}`); // Output: e == g: true (loose equality)
console.log(`e === g: ${e === g}`); // Output: e === g: false (strict equality)

// the == operator allows for type coercion, which means it tries to convert the operands to a common type before comparison.
// In this case, JavaScript tries to convert the string "7" to a number. Since g="7" represents a valid numeric string, it's successfully converted to the number 7.


// Activity 4: Logical Operators***********************

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let h = 5;
let i = 10;
let j = 15;
console.log(`h < i && i < j: ${h < i && i < j}`); // Output: h < i && i < j: true


// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
console.log(`h > i || i < j: ${h > i || i < j}`); // Output: h > i || i < j: true


// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
let k = false;
console.log(`!k: ${!k}`); // Output: !k: true


// Activity 5: Ternary Operator****************
// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let l = -3;
let result = l >= 0 ? "Positive" : "Negative";
console.log(`The number is: ${result}`); // Output: The number is: Negative

//************ */ Feature Request:**************
// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
let num1 = 8;
let num2 = 3;

console.log(`Sum: ${num1 + num2}`); // Output: Sum: 11
console.log(`Difference: ${num1 - num2}`); // Output: Difference: 5
console.log(`Product: ${num1 * num2}`); // Output: Product: 24
console.log(`Quotient: ${num1 / num2}`); // Output: Quotient: 2.6666666666666665
console.log(`Remainder: ${num1 % num2}`); // Output: Remainder: 2


// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
let x = 10;
let y = 20;

// Comparison Operators
console.log(`x > y: ${x > y}`); // Output: x > y: false
console.log(`x < y: ${x < y}`); // Output: x < y: true
console.log(`x >= y: ${x >= y}`); // Output: x >= y: false
console.log(`x <= y: ${x <= y}`); // Output: x <= y: true
console.log(`x == y: ${x == y}`); // Output: x == y: false
console.log(`x === y: ${x === y}`); // Output: x === y: false

// Logical Operators
console.log(`x < y && y > x: ${x < y && y > x}`); // Output: x < y && y > x: true
console.log(`x > y || y > x: ${x > y || y > x}`); // Output: x > y || y > x: true
console.log(`!true: ${!true}`); // Output: !true: false


// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
let number = -10;
let check = number >= 0 ? "Positive" : "Negative";
console.log(`The number is: ${check}`); // Output: The number is: Negative
