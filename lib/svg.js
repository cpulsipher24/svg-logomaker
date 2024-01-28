const { Triangle, Circle, Square } = require("./shapes.js");

function createSVG(userInput = {}) {
    const text = userInput.text || '';
    const textColor = userInput.textColor || 'black';
    const shapeType = userInput.shape || 'rectangle';
    const shapeColor = userInput.shapeColor || 'white';

    let shape;

    // Create an instance of the selected shape
    switch (shapeType) {
        case 'triangle':
            shape = new Triangle();
            break;
        case 'circle':
            shape = new Circle();
            break;
        case 'square':
            shape = new Square();
            break;
        default:
            // Default to a rectangle or handle invalid shape type
            shape = new Square();
    }

    // Set the color for the shape
    shape.setColor(shapeColor);

    // Render the shape and other SVG elements
    const svgContent = `
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="100" y="100" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
    `;

    return svgContent;
}

module.exports = { createSVG };

  