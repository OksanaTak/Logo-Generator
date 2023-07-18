const SVG = require('./Library/SVG')
const { Circle, Triangle, Square } = require('./Library/Shape ')
const inquirer = require('inquirer')
const fs = require('fs')

var questions = [
  {
    type: 'text',
    message: 'Enter LOGO text? ',
    name: 'text_message'
  },
  {
    type: 'list',
    message: 'Choose text color',
    choices: ['Red', 'Green', 'Yellow', 'Blue', 'Black', 'White'],
    name: 'text_color'
  },
  {
    type: 'list',
    message: 'Choose Shape',
    name: 'logo_Shape',
    choices: ['Circle', 'Square', 'Triangle']
  },
  {
    type: 'list',
    message: 'Choose shape color',
    choices: ['Red', 'Green', 'Yellow', 'Blue', 'Black', 'White'],
    name: 'shape_color'
  }
]

function init () {
  inquirer.prompt(questions).then(response => {
    console.log(respone)
    switch (response.logo_Shape) {
      case 'Circle':
        var myLogoShape = new Circle()
        break
      case 'Square':
        var myLogoShape = new Square()
        break
      case 'Triangle':
        var myLogoShape = new Triangle()
        break
    }
    myLogoShape(response.shape_color)
    var newSVG=new SVG()
    newSVG.setShape(myLogoShape)
    newSVG.setText(response.text_message, response.text_color)
    fs.writeFileSync("logo.svg", newSVG.render(),function(err){
        if(err) throw err;
    })

    console.log("LOGO created")

  })
}


init()
