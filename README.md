# json-to-csv

A simple package to convert JSON data to CSV.

## Installation

```bash
npm install json-to-csv

const { jsonToCSV } = require('json-to-csv');

const sampleJson = [
    { "name": "John", "age": 30, "city": "New York" },
    { "name": "Anna", "age": 28, "city": "London" },
    { "name": "Mike", "age": 32, "city": "Chicago" }
];

const csv = jsonToCSV(sampleJson);
console.log(csv);
