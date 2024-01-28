const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle Class', () => {
    test('renders triangle with the specified color', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toEqual('<polygon points="100,10 40,190 190,190" fill="blue" />');
    });
});

describe('Circle Class', () => {
    test('renders circle with the specified color', () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).toEqual('<circle cx="100" cy="100" r="90" fill="red" />');
    });
});

describe('Square Class', () => {
    test('renders square with the specified color', () => {
        const square = new Square();
        square.setColor('green');
        expect(square.render()).toEqual('<rect width="180" height="180" fill="green" />');
    });
});
