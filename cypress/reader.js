// const fs = require('fs');


// function getFixtureJson(filename) {
//     const wayToFile = 'cypress/fixtures/' + filename
//     const example = JSON.parse(fs.readFileSync(wayToFile, 'utf8'));
//     return example
// };


// const test = getFixtureJson('example.json')

// console.log(test)

import JsonWorker from "./jsonWorker"
const val = new JsonWorker

val.printText("hello world")