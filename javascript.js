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