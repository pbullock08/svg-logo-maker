
//text format  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="georgia" font-weight="bold" font-size="60px">PNB</text>
//text format has to be different for triangle
class Shape {
    constructor(bkgrdcolor) {
        this.fill = `fill="${bkgrdcolor}"`;
    }

    render () {
        return `<svg width="300" height="200">
        
        </svg>`
    }
};

class Circle {
    render () {
        return `<circle cx="150" cy="100" r="85"/>`
    }
};

class Square {
    render () {
        return `<rect x="65" y="15" width="170" height="170"/>`
    }
};

class Triangle {
    render () {
        return `<polygon points="150, 18 244, 182 56, 182"/>`
    }
};

module.exports = Shape;

