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
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    // Implement Circle specific methods and properties
    render() {
        return `<circle cx="150" cy="100" r="70" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    // Implement Square specific methods and properties
    render() {
        return `<rect width="150" height="150" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Circle, Square };
