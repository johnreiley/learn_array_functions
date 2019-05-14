let carDetailsArray = [{
        key: "year",
        value: "2016"
    },
    {
        key: "make",
        value: "Porsche"
    },
    {
        key: "model",
        value: "911 R"
    },
    {
        key: "color",
        value: "white"
    },
    {
        key: "msrp",
        value: "$184,900"
    }
];

function convertToCarObject(carDetailsArray) {
    return carDetailsArray.filter(function (item) {
            return item.key != "msrp";
        })
        .reduce(function (car, carDetail) {
            car[carDetail.key] = carDetail.value;
            return car;
        }, {})
}

carObject = convertToCarObject(carDetailsArray);
console.log(carObject)