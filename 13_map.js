/*
What does it do?
    - Takes a callback function as a parameter, applies the function to
    every element in the array and creates a new array instance from
    the results.
Does it edit the current array?
    - No
What does it return?
    - The new array of elements
How can I use it?
    - You have a bunch of different fruits and want to make
    juice from each one.
*/
//------------------------------------------------------------------------
// Real World Example!

let fruits = [{
        fruit: "apple",
        lbs: 2.3
    },
    {
        fruit: "orange",
        lbs: 1.5
    },
    {
        fruit: "pineapple",
        lbs: 3.8
    },
    {
        fruit: "kiwi",
        lbs: 2
    },
    {
        fruit: "grape",
        lbs: 4.1
    },
]

function convertToJuice(fruitItem) {
    let fruitJuice = {
        juice: fruitItem.fruit + " juice",
        ounces: (fruitItem.lbs * 3).toFixed(1)
    }
    return fruitJuice;
}

let juices = fruits.map(convertToJuice)
    .forEach(function (juiceItem) {
        let juiceLabel = juiceItem.juice + ": " + juiceItem.ounces + " oz"
        console.log(juiceLabel);
    });