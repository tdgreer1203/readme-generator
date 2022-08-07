// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your name (required): ',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email (required): ',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please enter your email.');
                return false;
            }
        }
    },
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
        name: 'link',
        message: 'Please enter a link to the project (required): ',
        validate: linkInput => {
            if(linkInput) {
                return true;
            } else {
                console.log('Please enter a link to the project.');
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
        type: 'checkbox', 
        name: 'builtWith',
        message: 'What did you use to build this project: ',
        choices: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'jQuery', 'Markdown']
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
        type: 'confirm',
        name: 'contributeConfirm',
        message: 'Can people contribute to this project: ',
        default: false
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute: ',
        when: ({contributeConfirm}) => {
            return(contributeConfirm ? true : false)
        }
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