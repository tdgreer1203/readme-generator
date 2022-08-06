// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title (required): ',
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log('Please enter a project title.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation: '
    },
    {
        type: 'input',
        name: 'reason',
        message: 'Why did you build the project: '
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What problem does it solve: '
    },
    {
        type: 'input',
        name: 'learned',
        message: 'What did you learn from creating it: ',
    },
    {
        type: 'confirm', 
        name: 'tocConfirm',
        message: 'Do you want to include a Table of Contents: ',
        default: false
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can the app be installed: '
    },
    {
        type: 'input',
        name: 'useage',
        message: 'How do we use the app: '
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Enter any credits: '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the type of license: ',
        choices: ['MIT', 'Unlicense', 'GPLv2', 'Apache', 'GPLv3', 'What the Fuck you Want']
    },
    {
        type: 'input',
        name: 'features',
        message: 'List the project features here: '
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute: '
    },
    {
        type: 'confirm',
        name: 'testsConfirm',
        message: 'Do you have any tests for this project: ',
        default: false
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter any tests for the project: ',
        when: ({testsConfirm}) => {
            return(testsConfirm ? true : false)
        }
    }
];

const promptUser = () => {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File Created'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then(userInput => {
        return generateMarkdown(userInput);
    }).then(markdown => {
        writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init();


/*
README Outline
    Title
    Description
        What was your motivation?
        Why did you build this project?
        What problem does it solve?
        What did you learn?
        What makes your project stand out?
    Table of Contents
        Installation
        Usage
        Credits
        License
    Features
    How to Contribute
    Tests
*/