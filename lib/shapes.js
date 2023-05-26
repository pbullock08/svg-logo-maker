//Shape class for the shared parameters of fill color, text, and text color
class Shape {
    constructor(fill, text, color) {
        this.fill = "";
        this.text = "";
        this.color = "";
    }

    setFill(fill) {
        this.fill = fill;
    }

    setText(text) {
        this.text = text;
    }

    setColor(color) {
        this.color = color;

    }
}

// Circle class that inherits from Shape and renders the svg code, allowing for user input
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="85" fill="${this.fill}"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}" font-family="georgia" font-weight="bold" font-size="60px">${this.text}</text>`
    }
}

// Square class that inherits from Shape and renders the svg code, allowing for user input
class Square extends Shape {
    render() {
        return `<rect x="65" y="15" width="170" height="170" fill="${this.fill}"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}" font-family="georgia" font-weight="bold" font-size="60px">${this.text}</text>`
    }
}

// Triangle class that inherits from Shape and renders the svg code, allowing for user input
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fill}"/>
       <text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}" font-family="georgia" font-weight="bold" font-size="45px">${this.text}</text>`
    }
}

// Export of shape classes to be accessbile by other files 
module.exports = { Circle, Square, Triangle }