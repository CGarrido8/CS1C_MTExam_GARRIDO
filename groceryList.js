// Ask the user if they want to create a grocery list
let createList = prompt("Do you want to create a grocery list? (y/n)");

if (createList.toLowerCase() === "y") {
    // Ask the number of items
    let itemCount = prompt("Enter the number of items to be added:");

    // Convert to an integer
    itemCount = parseInt(itemCount);

    // Initialize an empty grocery list array
    let grocery_list = [];

    // Collect items from the user
    for (let i = 0; i < itemCount; i++) {
        let item = prompt("Enter item: " + (i + 1));
        grocery_list.push(item);
    }

    // Sort the list safely
    let groceryList_Sort = grocery_list.toSorted();

    // Reverse the list safely
    let groceryList_Reverse = grocery_list.toReversed();

    // Display all lists using alert()
    alert("Original Grocery List: " + grocery_list.join(", ") + 
    "\nSorted Grocery List: " + groceryList_Sort.join(", ") + 
    "\nReversed Grocery List: " + groceryList_Reverse.join(", "));
} else {
    alert("No grocery list created.");
}
