/*
What does it do?
    - Takes one or more elements as parameters and adds them to the end of the
    array. 
Does it edit the current array?
    - Yes
What does it return?
    - The length of the array including the new element
*/

// How can I use it?
let array = ['element1', 'element2', 'element3'];
console.log(array.push('element4', 'element5'));
console.log(array);

// Real World Example!
let student = {
    firstName: "John",
    lastName: "Reiley",
    Id: 12345678
}

let students = [{
    firstName: "Bob",
    lastName: "Marley",
    Id: 13579246
}];

let numStudents = students.push(student);
console.log("Class Size: " + numStudents);
console.log("Class List: " + students);