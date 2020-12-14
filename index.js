const inquirer = require('inquirer');
const fs = require('fs');

let createReadMe = (username, title, description, installation, usage, command, command2, credit, license) => {
    return `
# Title : ${title}

# Table of Contents

* Description
* Installation
* Usage
* Test
* License

## GitURL: 

github.com/${username}

## Description :

${description}

## Installation :

${installation}

## Usage :

${usage}

## Credit :

${credit}

## Test :

Commands needed to run for tests and dependencies.

Dependencies: ${command} , Tests: ${command2}

## License 
${license}`;
}

// console.log(createReadMe);


var questions = [
    {
        type: 'input',
        name: 'username',
        message: "What is your GitHub username?",
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the name of your project?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Please write a short description of your project.",
    },
    {
        type: 'input',
        name: 'installation',
        message: "What does the user need to know about using the repo?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please input any examples of code that will assist the user with your project.",
    },
    {
        type: 'input',
        name: 'command',
        message: "What command should be run to install dependencies?",
        default: "npm i",
    },
    {
        type: 'input',
        name: 'command2',
        message: "What command should be run to run tests?",
        default: "npm test",
    },
    {
        type: 'input',
        name: 'credit',
        message: "Who should you credit for contribution to this project?",
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'Eclipse Public License 1.0', 'GNU GPL v3', 'The MIT License', 'Mozilla Public License 2.0'],
        filter: function (val) {
          return val.toLowerCase();
        }
     },
];


inquirer
    .prompt(questions)
    .then(answers => {
        // console.log(answers);

        const { username, title, description, installation, usage, command, command2, credit, license } = answers;

        const template = createReadMe(username, title, description, installation, usage, command, command2, credit, license);

        fs.writeFile('README.md', template, (err) => {
            if (err) throw err;
            console.log('Generating README file ...');
        });

    })
    .catch(error => {
        console.log(error);
    });






























// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

