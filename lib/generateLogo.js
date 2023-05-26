// classes imported
const { Circle, Square, Triangle } = require('./shapes.js');

function shapeRender({shape, bkgrdcolor, color, text}) {
    switch (shape) {
        case 'circle':
            const circle = new Circle();
            circle.setFill(bkgrdcolor);
            circle.setColor(color);
            circle.setText(text);
            return circle.render();
            break;
        case 'square':
            const square = new Square ();
            square.setFill(bkgrdcolor);
            square.setColor(color);
            square.setText(text);
            return square.render();
            break;
        case 'triangle':
            const triangle = new Triangle ();
            triangle.setFill(bkgrdcolor);
            triangle.setColor(color);
            triangle.setText(text);
            return triangle.render();
            break;
    }
}

function generateLogo({shape, bkgrdcolor, color, text}) {
    return `<svg width="300" height="200">
    ${shapeRender({shape, bkgrdcolor, color, text})}
</svg>`
}

module.exports = generateLogo;