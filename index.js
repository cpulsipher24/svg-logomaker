const CLI = require('./lib/userInput');
const { createSVG } = require('./lib/svg');
const fs = require('fs');

const cli = new CLI();

async function run() {
  const userInput = await cli.run();

  console.log('Received user input:', userInput);

  // Generate SVG content
  const svgContent = createSVG(userInput);

  // Save SVG to file
  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}

run();