const { Triangle, Circle, Square } = require('./shapes.js');

function createSVG(userInput = {}) {
  const { text, textColor, shape, shapeColor } = userInput;

  let shapeElement;

  switch (shape) {
    case 'triangle':
      shapeElement = new Triangle();
      break;
    case 'circle':
      shapeElement = new Circle();
      break;
    case 'square':
      shapeElement = new Square();
      break;
    default:
      // Default to a square if the shape is not recognized
      shapeElement = new Square();
  }

  // Set the color for the shape
  shapeElement.setColor(shapeColor);

  const shapeContent = shapeElement.render();

  const svgContent = `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeContent}
      <text x="50%" y="50%" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  return svgContent;
}

module.exports = { createSVG };
