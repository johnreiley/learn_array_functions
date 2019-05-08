/*
What does it do?
    - Determines whether or not a given array contains a specified element
    - Accepts a value as a parameter
Does it edit the current array?
    - No
What does it return?
    - True if array contains the value
    - False if the array does not
How can I use it?
    - Before buying a block of cheese, I first want to make sure
    my fridge does not have any cheese in it already.
*/
//------------------------------------------------------------------------
// Real World Example!
let fridgeContents = [
    "milk",
    "carrots",
    "apples",
    "soy sauce",
    "ketchup",
    "cheese",
    "yogurt"
]

let hasCheese = fridgeContents.includes("cheese");

if (hasCheese) {
    console.log("You have cheese")
} else {
    console.log("Go buy cheese")
}