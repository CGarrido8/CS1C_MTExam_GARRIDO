// Create an empty array to store favorite colors
let favoriteColors = [];

// Use a loop to collect three colors from the user
for (let i = 0; i < 3; i++) {
    let color = prompt("Enter color: " + (i + 1));
    favoriteColors.push(color); // Add the color to the array
    console.log("Updated color list:", favoriteColors); // Print updated array
}

// Display final list of colors
console.log("Your favorite colors are:", favoriteColors);
