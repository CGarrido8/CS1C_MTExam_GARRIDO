// Declare a variable to hold the favorite number
let theFavNumber = 2;

let guess; // Variable to store user's guesses

// Use a while loop to keep asking until the correct number is guessed
while (true) {
    guess = Number(prompt("Guess my favorite number:"));

    if (isNaN(guess)) {
        console.log("Please enter a valid number.");
    } else if (guess < theFavNumber) {
        console.log("Too low! Try again.");
    } else if (guess > theFavNumber) {
        console.log("Too high! Try again.");
    } else {
        console.log("Correct! You guessed my favorite number.");
        break; // Exit the loop when the correct number is guessed
    }
}
