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