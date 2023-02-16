// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = ["What is your project title?", 
                    "Can you describe your project?", 
                    "What is the installation command?", 
                    "How does someone use your project?", 
                    "What are the contribution guidelines, if any?", 
                    "What is the test command?", 
                    "What license is your project under?", 
                    "What is your Github username?", 
                    "What is your email address?"];

const licenseOptions = [{name: "No License", value: "none"},
                        {name: "MIT public license", value: "mit"}, 
                        {name: "IBM public license", value: "ibm"},
                        {name: "Eclipse public license", value: "eclipse"},
                        {name: "Apache commons public license", value: "apache"},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'contribute',
            message: questions[4],
        },
        {
            type: 'input',
            name: 'testing',
            message: questions[5],
        },
        {
            type: 'list',
            name: 'licensing',
            message: questions[6],
            choices: licenseOptions,
        },
        {
            type: 'input',
            name: 'github',
            message: questions[7],
        },
        {
            type: 'input',
            name: 'email',
            message: questions[8],
        },
    ]).then((answers) => {
        const readMeContent = generateMarkdown(answers);
    
        writeToFile('README.md', readMeContent);
    });
};

// Function call to initialize app
init();