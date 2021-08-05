//packages needed for application, selecting file for data to go to
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')


// array of questions for inqurier package
const questions = 
inquirer
.prompt([
    {
        type: 'input',
        message: 'name of README',
        name: 'name'
    },
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
{
    type: 'list',
    message: 'Select license',
    choices: ['Apache', 'MIT', 'GPL'],
    name: 'license'

}

])
//console log answers to make sure they register
.then(function (answer){
console.log(answer.name);    
console.log(answer.description);
console.log(answer.install);
console.log(answer.useinfo);
console.log(answer.contribute);
console.log(answer.instruct);
console.log(answer.license)

})
//function to write file
.then((answer) => {
    fs.writeFile('README.md', generateMarkdown(answer), (err) =>
    err ? console.error(err) : console.log('README created!'))

})  





