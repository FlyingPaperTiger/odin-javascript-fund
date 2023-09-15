/*
let userName;
let message;

function calculateAge(birthDate) {
    const currentDate = new Date();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
  
    // Check if the birthdate for this year has occurred or not
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      age--;
    }
  
    return age;
  }
   
// example  
userName = "John";
const birthDate = new Date("1990-12-05"); // replace with the actual birthdate
const age = calculateAge(birthDate);

message = `Hello ${userName}, te anyaszomorito! Látom vénülsz, már ${age} vagy idén!`

console.log(message)

//https://www.theodinproject.com/lessons/foundations-fundamentals-part-1
//ODIN Assignment 1
console.log(23 +97)
//ODIN Assignment 2
console.log(1-3+5+9+6-4)
//ODIN Assignment 3
console.log((4+6+9)/7)
//ODIN Assignment 4
let a = 10
console.log(a)
console.log(9*a)
let b = 7 * a
console.log(b)
//ODIN Assignment 5
const max = 57
let actual = max - 13
let percentage = actual / max
console.log(percentage)
//ODIN Assignment 6
console.log("Nagyon ügyes vagy!")

let counter = 10;
//alert(counter--);

// Function to update the countdown
function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
        let count = parseInt(countdownElement.textContent);
           
        if (count === 0) {
            countdownElement.textContent = "Countdown Complete!";
        } else {
            countdownElement.textContent = count - 1;
            setTimeout(updateCountdown, 1000); // Update every 1 second (1000 milliseconds)
        }
}

// Start the countdown
updateCountdown();

//https://www.theodinproject.com/lessons/foundations-fundamentals-part-2
//Exercise 1 - troubleshooting
/**
* ===== Troubleshooting =====
* The function below should log the number 2, however it does not, 
* see if you can fix it!
* Be sure to fix it in the spirit of the code, do not hard code the result.


function troubleshooting() {
   const a = 1;
   const b = 1;

   let result;

   // Edit between these lines
   // =================================
   result = a + b;

   // =================================

   return result;
}

const resultValue = troubleshooting()
console.log(resultValue)



//Exercise 2
/**
 * The code below tells the browser to ask you for a number
 * then if that number is `6`, it returns `true` otherwise it returns `false`
 * 
 * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
 

number = Number(prompt("enter a number"));

function numberChecker() {
	if(number >= 10) {
		return true;
	} else {
		return false;
	}
}

const messageNumberChecker = numberChecker()
console.log(messageNumberChecker)



//Exercise 3
/**
 * Lets do some math!
 * Some rules first:
 *   - Replace the strings to the right of the = with the math expression they describe.
 *   - Do not manually enter the answers to the equations. For example, `const a = 9` would be incorrect as 9 is the answer to the equation you're being asked to write out
 */
/*
const a = "one plus eight"
const b = "22 times three"
const c = "the *remainder* of 5/4"
const d = "the variable 'a' minus 17"
const e = "the sum of the previous four variables"

const a = 1 + 8
const b = 22 * 3
const c = 5 % 4
const d = a - 17
const e = a + b + c + d

const modules = [a, b, c, d, e]
console.log(modules)



//Exercise 4
/**
- After each step, run the code to make sure your code still works! 

- If your code fails to run, or you see a "ReferenceError" in the console, review your code and make sure you have completed all of the objectives.
  
- Don't forget you can put "console.log" anywhere to see what your values are at any time.
  
  ===== Step 1: =====
  Look at the code below and make a prediction of what the output will be. 
  
  After making your prediction, press 'Run' at the top and look at the output in the console. If you were surprised by anything, go back and look at the code to see what's going on.



// code to be deleted
const birthYear = 1948;
const thisYear = 1965;
const firstName = "Carlos";
const lastName = "Stevenson";

const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

console.log(greeting);

/*

  ===== Step 2: =====
  Once you understand the code snippet above, delete it. Then, using the following instructions, recreate the snippet on your own under "Your code goes here".
	
  ---------------------------------------------------------------
	
  1. Create 4 variables: firstName, lastName, thisYear, and birthYear

  2. Create a 5th variable, greeting, that is constructed from the previous 4
  (it should contain a greeting with the person's full name and their age)

  3. Print greeting with console.log

  4. Press 'Run' to ensure your code works
	
  ---------------------------------------------------------------

  ===== NOTE =====
  In order to make the tests pass you will need to use these exact values. The wording also needs to be an exact match. If the tests fail, check spacing, capitalization, and punctuation:
	
  birth year = 1948
  this year = 1965
  first name = Carlos
  last name = Stevenson

  The greeting should say: "Hello! My name is Carlos Stevenson and I am 17 years old."

*/

//===== Your code goes here =================

const birthYear = 1991
const currentDate = new Date()
const fisrtName = "Hippolit"
const lastName = "a Lakály"
const age = currentDate.getFullYear() - birthYear

const greeting = `Hi everybody! My Name is ${fisrtName} ${lastName} and I am ${age} years old`

console.log(greeting)

/*

  ===== Step 3: =====
  Now that you have the code working again, let's go back over it and, using the instructions below, edit it to make it easier to read.

  ---------------------------------------------------------------

  1. Go to "Testing your code" below

  2. Comment out the lines under "Test Step 2"

  3. Uncomment the lines under "Test Step 3" (Notice the difference between them)

  4. Go back to your code and create 2 new variables: "fullName" and "age"

  Do NOT simply type the full name and age into the new variables. Set them using the pre-existing variables, with the calculations that are currently inside of greeting.

  5. Edit the greeting string to use fullName and age instead of the other 4 variables. (the greeting should then look something like: "Hello! My name is " + fullName)

  6. Press 'Run' to ensure your code still works (output should be unchanged)

  ---------------------------------------------------------------

  ===== Testing your code =====
  - Do NOT edit this section until told to do so. 

  - Make sure one and only one of these test steps are commented out at a time



// Test Step 2: 

module.exports = {
  testGroup: "a",
  greeting,
  birthYear,
  thisYear,
  firstName,
  lastName
}
*/

let user = {
  testGroup: "a",
  greeting,
  birthYear,
  currentDate,
  fisrtName,
  lastName
}

console.log(user)

/*
// Test Step 3: (Don't forget to comment out lines under Test Step 2)

// module.exports = {
// 	testGroup: "b",
// 	greeting,
// 	birthYear,
// 	thisYear,
// 	firstName,
// 	lastName,
// 	fullName,
// 	age
// }
*/

const fullName = `${fisrtName} ${lastName}`

user = {
  testGroup: "b",
  greeting,
  birthYear,
  currentDate,
  fisrtName,
  lastName,
  fullName,
  age,
}

console.log(user)