const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle Class', () => {
    test('renders triangle with the specified color', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe('Circle Class', () => {
    test('renders circle with the specified color', () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="70" fill="red" />');
    });
});

describe('Square Class', () => {
    test('renders square with the specified color', () => {
        const square = new Square();
        square.setColor('green');
        expect(square.render()).toEqual('<rect width="150" height="150" fill="green" />');
    });
});