const fs = require("fs")
var inputText = fs.readFileSync("C:/Users/Běžný_člověk/Desktop/ksp2021/letopocty/03.in").toString()
inputLines = inputText.split("\n")
inputLines.shift()
inputLines.pop()



var days = ""

function letopocty(){

for(let i of inputLines){
let day= 0;
let end = i.split(" ")[1]
let start =i.split(" ")[0]


let mult = (end-start + 1)*42

let x = 3*(Math.ceil(start/3))
let y = 3*(Math.floor(end/3))

let T3 = ((y-x)/3)+1

let T48 = ((48*Math.ceil(start/48) -  48*Math.floor(end/48)) / 48) + 1
 
day+=mult + T3 - T48
days+=day + "\n"

    }
    fs.writeFileSync("ksp2021kps-letopocty-vystup.txt", days,)
}
letopocty()
