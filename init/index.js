// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



// TODO: Create an array of questions for user input
const questions = 
inquirer
.prompt([
{
    type: 'input',
    message: 'description of README',
    name: 'description'
},
{
    type: 'input',
    message: 'installation instructions',
    name: 'install'
},
{
    type: 'input',
    message: 'usage info',
    name: 'useinfo'
},
{
    type: 'input',
    message: 'contribution guidelines',
    name: 'contribute'
},
{
    type: 'input',
    message: 'Test Instructions',
    name: 'instruct'
},
])
//console log answers to make sure they register
.then(function (answer){
console.log(answer.description);
console.log(answer.install);
console.log(answer.useinfo);
console.log(answer.contribute);
console.log(answer.instruct);

});



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
