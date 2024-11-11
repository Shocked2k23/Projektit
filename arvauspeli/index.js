// Documents
const wins = document.getElementById("wins");
const losses = document.getElementById("losses");
const highlow = document.getElementById("highlow");

// Random Number generator
const randomNumber = Math.floor(Math.random() * 11);

// Main function
function guess(userGuess) {
  console.log(parseInt(guess));

  if (userGuess < randomNumber) {
    highlow.innerHTML + userGuess + "is higher";
  }
}
