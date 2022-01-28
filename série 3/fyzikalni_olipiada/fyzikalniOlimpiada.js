var fs = require("fs")
var input = fs.readFileSync("C:/Users/Běžný_člověk/Desktop/ksp2021/série 3/fyzikalni_olipiada/01 (6).in").toString()

//dělání hoven s inputem. tohle bude to nejvíc hnusný zacházení se stringama připravte se
let graf = []
let poradi ={}
input=input.split('\n')
info = input.splice(0,2)

let promena = info[0].split(" ")[2]
let zadane = info[1].split(" ")
for(let i=0;i<input.length;i++){
    let leftSide = input[i].split(" ")[0]
    if(!(leftSide in poradi)){
        if(zadane.includes(leftSide)){
            continue
        }
        poradi[leftSide]=i
    }
}

console.log(poradi,zadane)












fs.writeFileSync("ksp2021kps-letopocty-vystup.txt","input")
