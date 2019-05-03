/*
What does it do?
    - Removes the first element of an array
Does it edit the current array?
    - Yes
What does it return?
    - The first element of the array
*/
//------------------------------------------------------------------------
// How can I use it?
let array = ['e1', 'e2', 'e3'];
console.log("Length before shift(): " + array.length);
// 3
console.log("Element removed: " + array.shift());
// e1
console.log("Length after shift(): " + array.length);
// 2
//------------------------------------------------------------------------
// Real World Example!
let labQueue = {
    students: ["Adam Savage", "Kerry Grant", "Frodo Baggins"],
    nowServing: "",
    serveNext: function () {
        if (this.students.length == 0) {
            this.nowServing = "Queue is empty"
        } else {
            this.nowServing = this.students.shift();
        }
    }
};

labQueue.serveNext();
console.log("Now Serving: " + labQueue.nowServing);
// Adam Savage
console.log("Now Waiting: " + labQueue.students);
// Kerry Grant, Frodo Baggins