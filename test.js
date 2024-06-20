const { jsonToCSV } = require('./index');

const sampleJson = [
    { "name": "John", "age": 30, "city": "New York" },
    { "name": "Anna", "age": 28, "city": "London" },
    { "name": "Mike", "age": 32, "city": "Chicago" }
];

const csv = jsonToCSV(sampleJson);
console.log(csv);
