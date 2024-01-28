// lib/shapes.js
class Shape {
    // Common functionality and properties
    setColor(color) {
      this.color = color;
    }
  }
  
  class Triangle extends Shape {
    // Implement Triangle specific methods and properties
    render() {
      return `<polygon points="100,10 40,190 190,190" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    // Implement Circle specific methods and properties
    render() {
      return `<circle cx="100" cy="100" r="90" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    // Implement Square specific methods and properties
    render() {
      return `<rect width="180" height="180" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  