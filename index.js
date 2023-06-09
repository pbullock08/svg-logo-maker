// packages and files need for this application 
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const fs = require('fs');
const generateLogo = require('./lib/generateLogo.js');

//questions for inquirer for users to select the parameters for their logo
const questions = [
    {
        type: 'maxlength-input',
        message: 'What text do you want your logo to display?',
        name: 'text', 
        maxLength: '3',
    },

    {
        type: 'input', 
        message: 'What color do you want your text to be (keyword or hexcode)?', 
        name: 'color', 
    }, 

    {
        type: 'list', 
        message: 'What shape do you want your logo to be?',
        name: 'shape', 
        choices: [
            {
                name: 'Circle', 
                value: 'circle',
            },

            {
                name: 'Square', 
                value: 'square', 
            }, 

            {
                name: 'Triangle',
                value: 'triangle', 
            }
        ]
    },

    {
        type: 'input', 
        message: 'What color do you want your shape to be (keyword or hexcode)?', 
        name: 'bkgrdcolor', 
    }, 

]

// function to initialize app and generate the svg file given user input
function init() {
    inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
    inquirer.prompt(questions)
    .then((criteria) => {
        fs.writeFile('./examples/logo.svg', generateLogo(criteria), (err) => 
            err ? console.log(err) : console.log('Generated logo.svg.')
        );
    });
}

// function call to initialize app
init();
