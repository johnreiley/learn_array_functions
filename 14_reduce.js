/*
What does it do?
    - Iterates through the given array and applies the callback function
    parameter, accumulating every value/object into a single object which
    it returns
Does it edit the current array?
    - No
What does it return?
    - A single value/object
How can I use it?
    - You have an array of students' grades and want to find
    the average class grade to see if your a decent professor. You
    can use the reducer to get the sum of all the grades.
*/
//------------------------------------------------------------------------
// Real World Example!
let grades = [67.12, 90.34, 82.62, 96.40, 100.00, 98.97, 93.11, 62.30, 77.98]

function calculateClassGradeAvg(grades) {
    let sum = grades.reduce(function (acc, curr) {
        return acc + curr;
    })
    let avg = (sum / grades.length).toFixed(2);
    return avg;
}

let classGradeAvg = calculateClassGradeAvg(grades);
console.log("Class Grade Average: " + classGradeAvg + "%")