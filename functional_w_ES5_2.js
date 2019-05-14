let array = [{
        key: "name",
        value: "jared"
    },
    {
        key: "age",
        value: "old",
    },
    {
        key: "food",
        value: "bacon"
    },
    {
        key: "food",
        value: "pizza"
    },
    {
        key: "pet",
        value: "dog"
    },
    {
        key: "food",
        value: "wings"
    },
    {
        key: "pet",
        value: "fish"
    }
];

function convertObjectArrayToObject(array) {
    let object = new Object();
    return array.reduce(function (acc, curr) {
        if (acc.hasOwnProperty(curr.key)) {
            if (!Array.isArray(acc[curr.key])) {
                acc[curr.key] = [acc[curr.key]];
            }
            acc[curr.key] = acc[curr.key].concat(curr.value);
        } else {
            acc[curr.key] = curr.value;
        }
        return acc;
    }, object)
}

let object = convertObjectArrayToObject(array);
console.log(object);