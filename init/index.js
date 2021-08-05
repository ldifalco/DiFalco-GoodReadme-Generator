//packages needed for application, selecting file for data to go to
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')


// array of questions for inqurier package
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
    name: 'test'
},
{
    type: 'list',
    message: 'Select license',
    choices: ['Boost', 'MIT', 'Mozilla'],
    name: 'license'

},
{
    type: 'input',
    message: 'Github Username',
    name: 'github'
},
{
    type: 'input',
    message: 'Your Email',
    name: 'email'
}

])

//function to write file
.then((input) => {
    fs.writeFile('README.md', generateMarkdown(input), (err) =>
    err ? console.error(err) : console.log('README created!'))

})  





