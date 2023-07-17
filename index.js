const SVG=require('./Library/SVG')
const {Circle,Triangle,Square}=require('./Library/Shape ')
const inquirer =require('inquirer');
const fs= require('fs');


var questions = [
    {
        type:"text",
        message:"Enter LOGO text? ",
        name:"text_message"
    },
    {
        type:"list",
        message:"Choose text color",
        choices:["Red","Green","Yellow","Blue","Black","White"],
        name:"text_color"
    },
    {
        type:"list",
        message:"Choose Shape",
        name:"text_Shape",
        choices:["Circle", "Square", "Triangle"]
    },
    {
        type:"list",
        message:"Choose shape color",
        choices:["Red","Green","Yellow","Blue","Black","White"],
        name:"shape_color"
    },
]