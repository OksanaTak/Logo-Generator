const SVG=require("../Library/SVG");
const {Circle,Triangle,Square}= require("../Library/Shape");
describe('Circle SVG', () => {
    test('should render SVG logo of circle', () => {
      const testCircle = new Circle();
      testCircle.setColor("green")
      const testSVG=new SVG();
      testSVG.setShape(testCircle);
      testSVG.setText("SVG","white");
      let result = testSVG.render();
    expect(result).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>')
    })
})
describe('Triangle SVG', () => {
    test('should render SVG logo of circle', () => {
      const testTriangle = new Triangle();
      testTriangle.setColor("blue")
      const testSVG=new SVG();
      testSVG.setShape(testTriangle);
      testSVG.setText("SVG","yellow");
      let result = testSVG.render();
    expect(result).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">SVG</text></svg>')
    })
})
describe('Square SVG', () => {
    test('should render SVG logo of Square', () => {
      const testCircle = new Square();
      testSquare.setColor("red")
      const testSVG=new SVG();
      testSVG.setShape(testSquare);
      testSVG.setText("SVG","blue");
      let result = testSVG.render();
    expect(result).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120"  fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">SVG</text></svg>')
    })
})