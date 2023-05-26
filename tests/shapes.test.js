// shape classes are imported
const { Circle, Square, Triangle } = require('../lib/shapes');

// test for rendering a Circle given specific input
describe('Circle', () => {
    describe('render', () => {
        it('should render the code for a white circle with purple SVG text in svg language', () => {
            const shape = new Circle();
            shape.setFill("white");
            shape.setText("SVG");
            shape.setColor("purple")
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="85" fill="white"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="purple" font-family="georgia" font-weight="bold" font-size="60px">SVG</text>`);
        })
    });
});

// test for rendering a Square given specific input
describe('Square', () => {
    describe('render', () => {
        it('should render the code for a black square with yellow ABC text in svg language', () => {
            const shape = new Square();
            shape.setFill("#FFFF00");
            shape.setText("ABC");
            shape.setColor("#000000")
            expect(shape.render()).toEqual(`<rect x="65" y="15" width="170" height="170" fill="#FFFF00"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#000000" font-family="georgia" font-weight="bold" font-size="60px">ABC</text>`);
        })
    });
});

// test for rendering a Triangle given specific input
describe('Triangle', () => {
    describe('render', () => {
        it('should render the code for a orange triangle with blue BRB text in svg language', () => {
            const shape = new Triangle();
            shape.setFill("orange");
            shape.setText("BRB");
            shape.setColor("blue")
            expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="orange"/>
       <text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" fill="blue" font-family="georgia" font-weight="bold" font-size="45px">BRB</text>`);
        })
    });
});