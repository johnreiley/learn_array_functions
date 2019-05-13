/*
What does it do?
    - Goes through the given array and checks each value
    against the callback function parameter to test whether or 
    not every value passes.  It is like an AND logic gate
Does it edit the current array?
    - No
What does it return?
    - True if every value returns true from the callback,
    if not, False.
How can I use it?
    - You have a list of students and want to confirm 
    whether or not they are all registered for classes 
    in the upcoming semester.
*/
//------------------------------------------------------------------------
// Real World Example!
let students = [{
        name: "Bobby Darin",
        numRegisteredCredits: 12
    },
    {
        name: "Henry Ford",
        numRegisteredCredits: 7
    },
    {
        name: "Josh McKinney",
        numRegisteredCredits: 0
    },
    {
        name: "Carey Grant",
        numRegisteredCredits: 14
    },
    {
        name: "Peter Parker",
        numRegisteredCredits: 200
    },
];

let isRegistered = students.every(function (student) {
    return student.numRegisteredCredits > 0;
})

if (isRegistered) console.log("All students are registered");
else {
    console.log("Not all students are registered");
    let unRegisteredStudents = students.filter(student =>
            student.numRegisteredCredits == 0)
        .map(s => s.name);
    console.log("Unregistered Students: " + unRegisteredStudents);

}