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
    return array.reduce(function (acc, curr) {
        if (acc[curr.key] === undefined) {
            acc[curr.key] = curr.value;
        } else {
            if (!Array.isArray(acc[curr.key])) {
                acc[curr.key] = [acc[curr.key]];
            }
            acc[curr.key] = acc[curr.key].concat(curr.value);
        }
        return acc;
    }, {})
}

let object = convertObjectArrayToObject(array);
console.log(object);