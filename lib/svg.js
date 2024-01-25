function createSVG(userInput) {
    if (!userInput) {
      throw new Error('Invalid userInput');
    }
  
    const text = userInput.text || '';
    const textColor = userInput.textColor || 'black';
    const shape = userInput.shape || 'rectangle';
    const shapeColor = userInput.shapeColor || 'white';
  
    // Add logic to generate SVG content based on userInput
    const svgContent = `
      <svg width="100" height="100">
        <text x="10" y="40" fill="${textColor}">${text}</text>
        <rect width="100" height="100" fill="${shapeColor}"/>
      </svg>
    `;
  
    return svgContent;
  }
  
  module.exports = { createSVG };