/*
What does it do?
    - Fills an array with the value in the first parameter, while
    the optional second and third specify the start and end indexes
Does it edit the current array?
    - No
What does it return?
    - The new modified array
How can I use it?
    - I can use fill half a bag of random candies with one type of candy
*/
//------------------------------------------------------------------------
// Real World Example!

let emptyBag = Array(100).fill("")

function produceRandomCandy(candy) {
    let num = Math.random();
    if (num < 0.3) candy = "twix";
    else if (num < 0.6) candy = "snickers";
    else if (num < 0.9) candy = "milkyway";
    else candy = "three musketeers";
    return candy;
}

let bagOfCandy = emptyBag.map(produceRandomCandy);

bagOfCandy = bagOfCandy.fill("m&ms", Math.floor(bagOfCandy.length / 2))

console.log("After fill:");
bagOfCandy.forEach(candy => {
    console.log(candy)
});