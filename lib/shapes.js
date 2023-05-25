class Shape {
    constructor (fill, text, color) {
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

class Circle extends Shape {
    renderShape() {
        return `<circle cx="150" cy="100" r="85" fill="${this.fill}"/></br><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}" font-family="georgia" font-weight="bold" font-size="60px">${this.text}</text>`
    }
}

class Square extends Shape {
    renderShape () {
        return `<rect x="65" y="15" width="170" height="170" fill="${this.fill}"/></br><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}" font-family="georgia" font-weight="bold" font-size="60px">${this.text}</text>`
    }
}

class Triangle extends Shape {
    renderShape () {
       return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fill}"/></br><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}" font-family="georgia" font-weight="bold" font-size="60px">${this.text}</text>`
   }
}

module.exports = { Circle, Square, Triangle }