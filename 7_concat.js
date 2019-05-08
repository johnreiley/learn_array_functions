/*
What does it do?
    - Combines two or more elements into a new array instance
Does it edit the current array?
    - No
What does it return?
    - With no parameters, the method returns a shallow copy of the array
    - With 1+ parameters, the method returns a new array instance containing
    references to the elements all concated 
*/
// this example shows how object references work with concat
let array = [{value: 1}, {value: 2}, {value: 3}];
let object = {value: 4};
let concatedArray = array.concat(object);
console.log("Merged array: ");
for (object of concatedArray) console.log(object);

array[1].value = 10000;
console.log("Changed array[1].value of 2 to 1000")
for (object of concatedArray) console.log(object);
/*
How can I use it?
    - If you have a shopping list application and want to merge two 
    separate lists
*/
//------------------------------------------------------------------------
// Real World Example!
console.log("---- Example ----");
let shoppingListA = ["grapes", "jello", "soap", "peanut butter"];
let shoppingListB = ["chicken", "bread", "hamburger buns", "salt"];

console.log("Shopping List A: " + shoppingListA);
console.log("Shopping List B: " + shoppingListB);
let newShoppingList = shoppingListA.concat(shoppingListB);
console.log("Combined Shopping List:" + newShoppingList);



