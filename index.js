// TODO: Include packages needed for this application
// import inquirer from "inquirer";
// import fs from "fs";
// or should it be?
const inquirer = require('inquirer');
// const fs = require('fs');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = ["What is your project title?", 
                    "Can you describe your project?", 
                    "How do you install the project?", 
                    "How does someone use your project?", 
                    "What are the contribution guidelines, if any?", 
                    "Are there any testing instructions?", 
                    "What license is your project under?", 
                    "What is your Github username?", 
                    "What is your email address?"];

// TODO 
//WHEN I choose a license for my application from a list of options
//THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

//TODO
//WHEN I enter my GitHub username
//THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

//TODO
//WHEN I enter my email address
//THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
//WHEN I click on the links in the Table of Contents
//THEN I am taken to the corresponding section of the README

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    );
};

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
        type: 'input',
        name: 'licensing',
        message: questions[6],
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

// TODO: Create a function to initialize app
function init() {

};

// Function call to initialize app
init();