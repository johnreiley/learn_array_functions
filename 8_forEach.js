/*
What does it do?
    - forEach iterates through the given array, running the function
    passed as a parameter for each item in the array
Does it edit the current array?
    - No
What does it return?
    - undefined
How can I use it?
    - If I have an array of data that I want to read and copy to a new array
*/
//------------------------------------------------------------------------
// Real World Example!
let dataArray = ["!!!!", "@@@@", "####", "$$$$", "%%%%"];
let arrayCopy = [];

dataArray.forEach(function(item, index) {
    console.log("Item " + (index + 1) + ": " + item);
    arrayCopy.push(item);
});
console.log("COPY: " + arrayCopy);