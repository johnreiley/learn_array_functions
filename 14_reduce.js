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

// WITHOUT Starting acc value
let classOneGrades = [67.12, 90.34, 82.62, 96.40, 100.00, 98.97, 93.11, 62.30, 77.98]
let classTwoGrades = [64.12, 20.34, 92.62, 76.40, 102.00, 93.97, 83.11, 72.30, 67.98]

function calculateClassGradeAvg(grades) {
    let sum = grades.reduce(function (acc, curr) {
        return acc + curr;
    })
    let avg = (sum / grades.length).toFixed(2);
    return avg;
}

let classGradeAvg = calculateClassGradeAvg(classOneGrades);
console.log("Class 1 Grade Average: " + classGradeAvg + "%")

//WITH Starting acc value - find the average of two classes
let classTwoGradeSum = classTwoGrades.reduce(function (acc, curr) {
    return acc + curr;
})
let totalGradeSum = classOneGrades.reduce(function (acc, curr) {
    return acc + curr;
}, classTwoGradeSum)
let totalGradeAverage = (totalGradeSum / (classOneGrades.length + classTwoGrades.length)).toFixed(2);
console.log("Total Grade Average: " + totalGradeAverage + "%")