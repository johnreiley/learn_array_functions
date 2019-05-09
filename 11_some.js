/*
What does it do?
    - Goes through the given array and checks each value
    against the callback function parameter to test whether or 
    not one or more value passes.  It is like an OR logic gate
Does it edit the current array?
    - No
What does it return?
    - True, if one or more value passes the callback, False if
    none
How can I use it?
    - You are in a plane and it crashes on a desert island. You must find 
    out if at least one person on the plane is a mechanic.
*/
//------------------------------------------------------------------------
// Real World Example!
let people = [{
        name: "Kent Burger",
        occupation: "garbage man"
    },
    {
        name: "Gregory Duggins",
        occupation: "pilot"
    },
    {
        name: "David Peyton",
        occupation: "baseball athlete"
    },
    {
        name: "Jafar Houdini",
        occupation: "assassin"
    },
    {
        name: "Fred Cruger",
        occupation: "mechanic"
    },
    {
        name: "Josh McKinney",
        occupation: "programmer"
    },
];

let hasMechanic = people.some(function (person) {
    return person.occupation === "mechanic"
});

if (hasMechanic) {
    console.log("There's a mechanic! Hope isn't completely lost!")
} else {
    console.log("Looks like you're gonna die. Sorry.")
}