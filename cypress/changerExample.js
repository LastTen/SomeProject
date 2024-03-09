//Get data from з JSON
const fs = require('fs');
const example = JSON.parse(fs.readFileSync('cypress/fixtures/example.json', 'utf8'));


//Change data for test case
example.name = "John2";




//Save data to Json file
fs.writeFileSync('cypress/fixtures/example.json', JSON.stringify(example), 'utf8');