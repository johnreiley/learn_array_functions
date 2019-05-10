/*
What does it do?
    - Copies a specified part of the given array to
Does it edit the current array?
    - Yes
What does it return?
    - A copy of the modified array
How can I use it?
    - I want to take the half of my bag of candy that is m&ms
    and use it to make my whole bag of candy m&ms!
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

bagOfCandy.copyWithin(0, Math.floor(bagOfCandy.length / 2));

console.log("After CopyWithin:");
bagOfCandy.forEach(candy => {
    console.log(candy)
});