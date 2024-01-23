const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle Class', () => {
    test('renders triangle with the specified color', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});