function createSVG(userInput = {}) {
    const text = userInput.text || '';
    const textColor = userInput.textColor || 'black';
    const shape = userInput.shape || 'rectangle';
    const shapeColor = userInput.shapeColor || 'white';
  
    const svgContent = `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${shapeColor}"/>
    <text x="50%" y="50%" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
    `;
  
    return svgContent;
}

module.exports = { createSVG };
  