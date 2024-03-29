const inquirer = require('inquirer');
const { createSVG } = require('./svg');

class CLI {
  constructor() {
  }

  async run() {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: (input) => input.length > 0 && input.length <= 3,
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (color keyword or hexadecimal number):',
        validate: (input) => input.length > 0,
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (color keyword or hexadecimal number):',
        validate: (input) => input.length > 0,
      },
    ]);

    console.log('Received user input:', userInput);

    const svgContent = createSVG(userInput);

    console.log('Generated SVG content:', svgContent);

    return userInput; // Return the userInput object
  }
}

module.exports = CLI;
