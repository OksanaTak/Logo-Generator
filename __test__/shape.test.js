const { Circle, Triangle, Square } = require('../Library/Shape')
describe('Circle', () => {
  test('should render circle', () => {
    const testCircle = new Circle()
    testCircle.setColor('green')
    let result = testCircle.render()
    expect(result).toEqual(`<circle cx="150" cy="100" r="100" fill="green" />`)
  })
})
describe('Triangle', () => {
  test('should render triangle', () => {
    const testTriangle = new Triangle()
    testTriangle.setColor('red')
    let result = testTriangle.render()
    expect(result).toEqual(
      `<polygon points="150, 18 244, 182 56, 182" fill="red" />`
    )
  })
})
describe('Square', () => {
  test('should render Square', () => {
    const testSquare = new Square()
    testSquare.setColor('blue')
    let result = testSquare.render()
    expect(result).toEqual(
      `<rect x="90" y="40" width="120" height="120"  fill="blue" />`
    )
  })
})
