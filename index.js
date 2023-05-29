// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'reason',
        message: 'Why did you build this application?', 
    },
    {
        type: 'input',
        name: 'solution',
        message: 'What problem does it solve?', 
    },
    {
        type: 'input',
        name: 'learned',
        message: 'What did you learn?', 
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your application?', 
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What is an industry standard link on how to contribute?', 
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What example can you show on how to use this?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license the application is covered under?',
        choices: ["The MIT License","The 2-Clause BSD License","The 3-Clause BSD License", "None"]
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How to test this application?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
        const markdownText = generateMarkdown(answers);
        console.log(markdownText);
        fs.writeFile('./utils/README.md', markdownText, (err) =>
        err ? console.error(err) : console.log('Success!')
      );
    })
}

// Function call to initialize app
init();