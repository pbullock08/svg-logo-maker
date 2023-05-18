function shapeRender(shape) {
    switch(shape) {
        case 'circle':
            return `<circle cx="150" cy="100" r="85"/>`
            break;
        case 'square':
            return `<rect x="65" y="15" width="170" height="170"/>`
            break;
        case 'triangle':
            return `<polygon points="150, 18 244, 182 56, 182"/>`
            break;
    }
}

function generateLogo({shape}) {
    return `<svg width="300" height="200">
    ${shapeRender(shape)}
    </svg>`
}



module.exports = generateLogo;