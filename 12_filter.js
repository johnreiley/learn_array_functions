/*
What does it do?
    - Goes through the given array and creates a new array of
    the elements that return true in the provided callback function
Does it edit the current array?
    - No
What does it return?
    - A new array instance of elements
How can I use it?
    - You have a very large bag of candy but only want all
    of the snicker bars.  You put the bag through a filter
    for snickers and all is well.
*/
// Real World Example!
let bagOfCandy = [
    "snickers", "twix", "milkyway",
    "snickers", "snickers", "twix",
    "snickers", "milkyway", "twix",
    "milkyway", "twix", "snickers",
    "snickers", "twix", "milkyway",
    "snickers", "snickers", "twix",
    "snickers", "milkyway", "twix",
    "milkyway", "twix", "snickers",
    "snickers", "twix", "milkyway",
    "snickers", "snickers", "twix",
    "snickers", "milkyway", "twix",
    "milkyway", "twix", "snickers",
    "snickers", "twix", "milkyway",
    "snickers", "snickers", "twix",
    "snickers", "milkyway", "twix",
    "milkyway", "twix", "snickers",
]

let bagofSnickers = bagOfCandy.filter(function (candyBar) {
    return candyBar === "snickers"
});

console.log(bagofSnickers);
console.log("You have " + bagofSnickers.length + " snickers! Yay you!");