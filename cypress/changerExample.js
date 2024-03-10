const fs = require('fs');
//Random number generator
const ranNum = Math.floor(Math.random() * 100) + 1;

function changeJson(filename) {
    // Get data from json
    const wayToFile = 'cypress/fixtures/' + filename
    const example = JSON.parse(fs.readFileSync(wayToFile, 'utf8'));


    //Change data for test case

    example.fName = "John" + Math.floor(Math.random() * 100) + 1;
    example.sName = "Di" + Math.floor(Math.random() * 100) + 1;
    example.lName = "Doe3" + ranNum
    example.phone = ranNum + ranNum + ranNum + '3'
    example.ageL18 = Math.floor(Math.random() * 100) + 1;
    example.ageM18 = Math.floor(Math.random() * 100) + 1;
    example.gender = "Male"
    example.city = "London"
    example.login = "John"
    example.password = "<PASSWORD>"
    example.email = "hello@cypress.io"
    example.body = "Fixtures are a great way to mock data for responses to routes"
    example.bio = "Some BIO",

        //Save data to Json file
        fs.writeFileSync(wayToFile, JSON.stringify(example), 'utf8');
    console.log("🚀 ~ changeJson ~ example:", example)

}

module.exports = { changeJson };