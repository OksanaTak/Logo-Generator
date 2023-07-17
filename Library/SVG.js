class SVG {
  constructor () {
    this.textElement = ''
    this.shapeElement = ''
  }
  setText (textmessage, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="midddle" fill="${color}">${textmessage}</text>`
  }
  setShape (shapeElement) {
    this.shapeElement = shapeElement
  }
  render () {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
  }
}

module.exports = SVG
