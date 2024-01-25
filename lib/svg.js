const { createSVGDocument } = require('svg');

function createSVG(userInput) {
  // Add logic to generate SVG content based on userInput
  const svgContent = createSVGDocument({
    text: userInput.text,
    textColor: userInput.textColor,
    shape: userInput.shape,
    shapeColor: userInput.shapeColor,
  });

  return svgContent;
}

module.exports = { createSVG };