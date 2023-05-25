// classes imported
const Shape = require('./shapes.js');
const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

function shapeRender(shape) {
    switch (shape) {
        case 'circle':
            const circle = new Circle();
            circle.renderShape();
            break;
        // case 'square':
        //     const square = new Square();
        //     square.renderShape();
        //     square.renderText();
        //     break;
        // case 'triangle':
        //     const triangle = new Triangle();
        //     square.renderShape();
        //     square.renderText();
        //     break;
    }
}

function generateLogo() {
    return `<svg width="300" height="200">
    </svg>
}

module.exports = generateLogo;