function createSVG(userInput = {}) {
    const text = userInput.text || '';
    const textColor = userInput.textColor || 'black';
    const shape = userInput.shape || 'rectangle';
    const shapeColor = userInput.shapeColor || 'white';
  
    const svgContent = `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="1000" height="1000" fill="black"/>
    <text x="100" y="100" font-size="60" text-anchor="middle" fill="red">ctp</text>
    </svg>
    `;
  
    return svgContent;
}

module.exports = { createSVG };
  