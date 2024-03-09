//Get data from з JSON
const fs = require('fs');
const wayToFile = 'cypress/fixtures/example.json'
const example = JSON.parse(fs.readFileSync(wayToFile, 'utf8'));


//Change data for test case
example.name = "John3";




//Save data to Json file
fs.writeFileSync(wayToFile, JSON.stringify(example), 'utf8');