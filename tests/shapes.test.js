// classes are imported
const { Circle, Square, Triangle } = require('../lib/shapes');

// testing suite for Circle
describe('Circle', () => {
    describe('renderShape', () => {
        it('should render the code for a white circle with purple SVG text in svg language', () => {
            const shape = new Circle();
            shape.setFill("white");
            shape.setText("SVG");
            shape.setColor("purple")
            expect(shape.renderShape()).toEqual(`<circle cx="150" cy="100" r="85" fill="white"/></br><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="purple" font-family="georgia" font-weight="bold" font-size="60px">SVG</text>`);
        })
    });
});

// testing suite for Square
describe('Square', () => {
    describe('renderShape', () => {
        it('should render the code for a black square with yellow ABC text in svg language', () => {
            const shape = new Square();
            shape.setFill("black");
            shape.setText("ABC");
            shape.setColor("yellow")
            expect(shape.renderShape()).toEqual(`<rect x="65" y="15" width="170" height="170" fill="black"/></br><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="yellow" font-family="georgia" font-weight="bold" font-size="60px">ABC</text>`);
        })
    });
});

// testing suite for Triangle
describe('Triangle', () => {
    describe('renderShape', () => {
        it('should render the code for a orange triangle with blue BRB text in svg language', () => {
            const shape = new Triangle();
            shape.setFill("orange");
            shape.setText("BRB");
            shape.setColor("blue")
            expect(shape.renderShape()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="orange"/></br><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="blue" font-family="georgia" font-weight="bold" font-size="60px">BRB</text>`);
        })
    });
});