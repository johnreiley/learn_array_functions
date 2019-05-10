/*
What does it do?
    - Reverses the contents of an array so that the front is
    at the back and the back is at the front
Does it edit the current array?
    - Yes
What does it return?
    - the reversed array
How can I use it?
    - If you have a list of student names that are sorted but want
    to view them reverse sorted, you can use the reverse function
*/
//------------------------------------------------------------------------
// Real World Example!
let students = [{
    firstName: "Bobby",
    lastName: "Tread"
}, {
    firstName: "Saint",
    lastName: "Bernard"
}, {
    firstName: "Bobby",
    lastName: "Darin"
}, {
    firstName: "Adam",
    lastName: "Young"
}, {
    firstName: "Josh",
    lastName: "McKinney"
}, {
    firstName: "Travis",
    lastName: "Wielder"
}, {
    firstName: "Steve",
    lastName: "Jobs"
}, {
    firstName: "Henry",
    lastName: "Ford"
}, {
    firstName: "Greg",
    lastName: "Faontine"
}, {
    firstName: "Frog",
    lastName: "In-A-Sock"
}]

students.sort(function (s1, s2) {
    if (s1.lastName <= s2.lastName) return -1;
    else return 1;
}).reverse();

students.forEach(student => console.log(student.lastName));