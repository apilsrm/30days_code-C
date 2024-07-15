// Day 1: Variables and Data Types
// Activity 1: Variable Declaration
// • Task 1: Declare a variable using var, assign it a number, and log the value to the console.

// Declaring a variable using var and assigning it a number
var num = 42;
// Logging the value to the console
console.log(num); // Output: 42


// • Task 2: Declare a variable using let, assign it a string, and log the value to the console.
// Declaring a variable using let and assigning it a string
let greeting = "Hello, World! Its me";

// Logging the value to the console
console.log(greeting); // Output: Hello, World! Its me


// Activity 2: Constant Declaration
// • Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
// Declaring a variable using const and assigning it a boolean value
const isJavaScriptFun = true;

// Logging the value to the console
console.log(isJavaScriptFun); // Output: true



// Activity 3: Data Types
// • Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
// Number
let age = 25;
console.log(typeof age); // Output: number

// String
let name = "Alice";
console.log(typeof name); // Output: string

// Boolean
let isStudent = true;
console.log(typeof isStudent); // Output: boolean

// Object
let person = {
  firstName: "John",
  lastName: "Doe"
};
console.log(typeof person); // Output: object

// Array
let colors = ["red", "green", "blue"];
console.log(typeof colors); // Output: object


// Activity 4: Reassigning Variables
// • Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
// Declaring a variable using let and assigning an initial value
let city = "New York";
console.log(city); // Output: New York

// Reassigning a new value
city = "Los Angeles";
console.log(city); // Output: Los Angeles


// Activity 5: Understanding const
// • Task 6: Try reassigning a variable declared with const and observe the error.

// Declaring a variable using const and assigning an initial value
const country = "USA";
console.log(country); // Output: USA

// Trying to reassign a new value
try {
  country = "Canada";
} catch (error) {
  console.error(error); // Output: TypeError: Assignment to constant variable.
}

//Feature Request:
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

// Declare variables of different data types
let number = 42;
let string = "Hello, JavaScript!";
let boolean = false;
let object = { name: "Alice", age: 30 };
let array = [1, 2, 3, 4, 5];

// Log both the value and type of each variable to the console
console.log(`Value: ${number}, Type: ${typeof number}`); // Value: 42, Type: number
console.log(`Value: ${string}, Type: ${typeof string}`); // Value: Hello, JavaScript!, Type: string
console.log(`Value: ${boolean}, Type: ${typeof boolean}`); // Value: false, Type: boolean
console.log(`Value: ${object}, Type: ${typeof object}`); // Value: [object Object], Type: object
console.log(`Value: ${array}, Type: ${typeof array}`); // Value: 1,2,3,4,5, Type: object




// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

// Demonstrating reassignment with let
let language = "JavaScript";
console.log(`Initial value of let variable: ${language}`); // Output: Initial value of let variable: JavaScript

language = "TypeScript";
console.log(`Reassigned value of let variable: ${language}`); // Output: Reassigned value of let variable: TypeScript

// Demonstrating reassignment with const
const framework = "React";
console.log(`Initial value of const variable: ${framework}`); // Output: Initial value of const variable: React

try {
  framework = "Vue";
} catch (error) {
  console.error(`Error when reassigning const variable: ${error.message}`); // Error when reassigning const variable: Assignment to constant variable.
}
