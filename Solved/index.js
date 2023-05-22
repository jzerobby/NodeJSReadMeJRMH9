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
        name: 'motivation',
        message: 'What was your motivation?', 
    },
    {
        type: 'input',
        name: 'reason',
        message: 'Why did you build this project?', 
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
        message: 'What are the steps required to install your project?', 
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How to Contribute?', 
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use this?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license the application is covered under?',
    },
    {
        type: 'list',
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
fs.writeFile('README.md', process.argv[2], (err) =>
  err ? console.error(err) : console.log('Success!')
);

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers) {
        const markdownText = generateMarkdown(questions);
        writeToFile("High Quality README", markdownText);
    })
}

// Function call to initialize app
init();
