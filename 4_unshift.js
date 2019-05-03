/*
What does it do?
    - Adds one or more elements to the beginning of an array
Does it edit the current array?
    - Yes
What does it return?
    - The new length of the array
*/
//------------------------------------------------------------------------
// How can I use it? -- If you have a shopping list and want to add an
// item to it.
let array = ['e1', 'e2', 'e3'];
console.log("The array: " + array);
// e1, e2, e3
console.log("New length of array: " + array.unshift('e0'));
// 4
console.log("The array: " + array);
// e0, e1, e2, e3
//------------------------------------------------------------------------
// Real World Example!
let shoppingList = {
    list: ['chips', 'salsa', 'sour cream', 'oj'],
    addNewItem: function (newItem) {
        return this.list.unshift(newItem);
    }
};

console.log("Shopping List: " + shoppingList.list)
shoppingList.addNewItem("eggs");
console.log("Shopping List: " + shoppingList.list);
// eggs, chips, salsa, sour cream, oj