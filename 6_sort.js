/*
What does it do?
    - Sorts the array by UTF-16 Unicode order when called with no parameters
    - Accepts a callback function as a parameter that can be used to custom sort
Does it edit the current array?
    - Yes
What does it return?
    - The sorted array
How can I use it? -- If you have a class list of students and want to 
sort them alphabetically.
*/
//------------------------------------------------------------------------
// Real World Example!

// with a callback function
let students = [{
        firstName: "Bob",
        lastName: "Marley",
        Id: 13579246
    },
    {
        firstName: "Zenora",
        lastName: "Waggle",
        Id: 48572957
    },
    {
        firstName: "Henry",
        lastName: "Ford",
        Id: 13579246
    },
    {
        firstName: "Wane",
        lastName: "Durgery",
        Id: 13579246
    },
];

console.log("Class List Before Sort:")
for (let student of students) {
    console.log(student.lastName);
}

let sortedStudents = students.sort(function (a, b) {
    // sort by a-z
    if (a.lastName == b.lastName) {
        return 0;
    }
    return (a.lastName < b.lastName) ? -1 : 1;
});

console.log("Class List After Sort:")
for (let student of students) {
    console.log(student.lastName);
}


//without a callback function
let studentsArray = ["Josh McKinney", "Braeden Eddington", "Harry Potter", "Zorro"];

console.log("Class List Before Sort: " + studentsArray)
studentsArray.sort();
console.log("Class List After Sort: " + studentsArray)