function createSVG(userInput = {}) {
    const text = userInput.text || '';
    const textColor = userInput.textColor || 'black'; // Set a default color if not provided
    const shape = userInput.shape || 'rectangle'; // Set a default shape if not provided
    const shapeColor = userInput.shapeColor || 'white'; // Set a default color if not provided
  
    const svgContent = `
      <svg width="100" height="100">
        <text x="10" y="40" fill="${textColor}">${text}</text>
        <rect width="100" height="100" fill="${shapeColor}"/>
      </svg>
    `;
  
    return svgContent;
  }
  
  module.exports = { createSVG };
  