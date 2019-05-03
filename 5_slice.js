/*
What does it do?
    - Returns a copy of the array using the parameters that specify the
    indexes of where the slice will occur
Does it edit the current array?
    - No
What does it return?
    - A shallow copy of the array
*/
//------------------------------------------------------------------------
// How can I use it? -- If you have a shopping list and want to view
// a specified number of items

let array = ['e1', 'e2', 'e3', 'e4', 'e5'];

let noParamSlice = array.slice();
console.log("Slice with no parameters: " + noParamSlice);
// Slice with no parameters: e1,e2,e3,e4,e5

let oneParamSlice = array.slice(2);
console.log("Slice with one parameter: " + oneParamSlice);
// Slice with one parameter: e3,e4,e5

let twoParamSlice = array.slice(1, 3);
console.log("Slice with two parameters: " + twoParamSlice);
// Slice with two parameters: e2,e3

//------------------------------------------------------------------------
// Real World Example!
let shoppingList = {
    list: ['chips', 'salsa', 'sour cream', 'oj'],
    getItems: function (numItems) {
        return this.list.slice(this.list.length - numItems);
    }
};
console.log(shoppingList.getItems(2));
// sour cream, oj