// Day 3: Control Structures

//          ***************** Activity 1: If-Else Statements *****************
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let number = 5;

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}
// Output: The number is positive.


// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 20;

if (age >= 18) {
  console.log("The person is eligible to vote.");
} else {
  console.log("The person is not eligible to vote.");
}
// Output: The person is eligible to vote.


//          ***************** Activity 2: Nested If-Else Statements *****************
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let num1 = 10;
let num2 = 20;
let num3 = 15;

if (num1 >= num2) {
  if (num1 >= num3) {
    console.log("The largest number is " + num1);
  } else {
    console.log("The largest number is " + num3);
  }
} else {
  if (num2 >= num3) {
    console.log("The largest number is " + num2);
  } else {
    console.log("The largest number is " + num3);
  }
}
// Output: The largest number is 20


//           *****************  Activity 3: Switch Case *****************
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let dayNumber = 3;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day number";
}

console.log(dayName); // Output: Tuesday


// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let score = 85;
let grade;

switch (true) {
  case (score >= 90):
    grade = 'A';
    break;
  case (score >= 80):
    grade = 'B';
    break;
  case (score >= 70):
    grade = 'C';
    break;
  case (score >= 60):
    grade = 'D';
    break;
  default:
    grade = 'F';
}

console.log(`The grade is: ${grade}`); // Output: The grade is: B


// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let s = 4;
let result = (s % 2 === 0) ? "Even" : "Odd";
console.log(`The number is: ${result}`); // Output: The number is: Even


//           ***************** Activity 5: Combining Conditions *****************
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}
// Output: 2024 is a leap year.


// **************** Feature Request *****************
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.

function checkNumber(number) {
    if (number > 0) {
      console.log("The number is positive.");
    } else if (number < 0) {
      console.log("The number is negative.");
    } else {
      console.log("The number is zero.");
    }
  }
  
  // Example usage:
  checkNumber(10);  // Output: The number is positive.
  checkNumber(-5);  // Output: The number is negative.
  checkNumber(0);   // Output: The number is zero.
  
// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.

function checkVotingEligibility(age) {
    if (age >= 18) {
      console.log("The person is eligible to vote.");
    } else {
      console.log("The person is not eligible to vote.");
    }
  }
  
  // Example usage:
  checkVotingEligibility(20);  // Output: The person is eligible to vote.
  checkVotingEligibility(16);  // Output: The person is not eligible to vote.
  

// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.

function getDayName(dayNumber) {
    let dayName;
    
    switch (dayNumber) {
      case 1:
        dayName = "Sunday";
        break;
      case 2:
        dayName = "Monday";
        break;
      case 3:
        dayName = "Tuesday";
        break;
      case 4:
        dayName = "Wednesday";
        break;
      case 5:
        dayName = "Thursday";
        break;
      case 6:
        dayName = "Friday";
        break;
      case 7:
        dayName = "Saturday";
        break;
      default:
        dayName = "Invalid day number";
    }
    
    console.log(dayName);
  }
  
  // Example usage:
  getDayName(3);  // Output: Tuesday
  getDayName(7);  // Output: Saturday
  getDayName(0);  // Output: Invalid day number
  

// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
function getDayName(dayNumber) {
    let dayName;
    
    switch (dayNumber) {
      case 1:
        dayName = "Sunday";
        break;
      case 2:
        dayName = "Monday";
        break;
      case 3:
        dayName = "Tuesday";
        break;
      case 4:
        dayName = "Wednesday";
        break;
      case 5:
        dayName = "Thursday";
        break;
      case 6:
        dayName = "Friday";
        break;
      case 7:
        dayName = "Saturday";
        break;
      default:
        dayName = "Invalid day number";
    }
    
    console.log(dayName);
  }
  
  // Example usage:
  getDayName(3);  // Output: Tuesday
  getDayName(7);  // Output: Saturday
  getDayName(0);  // Output: Invalid day number
  

// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.

function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      console.log(`${year} is a leap year.`);
    } else {
      console.log(`${year} is not a leap year.`);
    }
  }
  
  // Example usage:
  checkLeapYear(2024);  // Output: 2024 is a leap year.
  checkLeapYear(2023);  // Output: 2023 is not a leap year.
  checkLeapYear(2000);  // Output: 2000 is a leap year.
  checkLeapYear(1900);  // Output: 1900 is not a leap year.
  