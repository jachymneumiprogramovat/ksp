var fs = require("fs");
const { off } = require("process");
var input = fs.readFileSync("C:/Users/Běžný_člověk/Desktop/ksp2021/série 2/podivná brigáda/05.in").toString()
input = input.split("\n")
input.shift()

//true je kevin false je sára
let Kcas = 0
let Scas = 0
let cas = 0


for(el of input){
    if(Kcas<Scas){
        Kcas+=parseInt(el)
        
    }else if(Kcas>Scas){
        Scas+=parseInt(el)
    }
    else{
        Kcas+=parseInt(el)
    }
}
if(Kcas>Scas){
cas = Kcas
}else{
    cas = Scas
}
console.log(Kcas,Scas)

 
fs.writeFileSync("ksp2021kps-vystup.txt",cas+"")
