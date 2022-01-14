var fs = require("fs")
const { PassThrough } = require("stream")
var input = fs.readFileSync("C:/Users/Běžný_člověk/Desktop/ksp2021/série 3/otočená_morseovka/05 (1).in").toString()
input = input.split("\n")
input.shift()
input.pop()
let ans =""
let novy = []
let morz = {
"A":".-",    
"B":"-...",  
"C":"-.-.",
"D":"-..",   
"E":".",     
"F":"..-.",
"G":"--.",   
"H":"....",  
"I":"..",
"J":".---",  
"K":"-.-",   
"L":".-..",
"M":"--",    
"N":"-.",    
"O":"---",
"P":".--.", 
"Q":"--.-", 
"R":".-.",
"S":"...",   
"T":"-",     
"U":"..-",
"V":"...-",  
"W":".--",   
"X":"-..-",
"Y":"-.--",  
"Z":"--..",  
"1":".----",
"2":"..---", 
"3":"...--", 
"4":"....-",
"5":".....", 
"6":"-....", 
"7":"--...",
"8":"---..", 
"9":"----.", 
"0":"-----"
}

for(j of input){
    for(i in morz){
        while(j.includes(i)){
        j=j.replace(i,morz[i])
        }
    }
    novy.push(j)
}

novy.forEach(el=>{
    el=el.split("")
    let zacatek = el.slice(0,Math.floor(el.length/2))
    let konec = el.slice(Math.ceil(el.length/2,))
    konec=konec.reverse()

    if(equals(zacatek,konec)){
        ans+="ANO\n"
    }
    else{
        ans+="NE\n"
    }  
})
fs.writeFileSync("ksp2021kps-letopocty-vystup.txt",ans)

function equals(zacatek,konec){
    for(let i=0;i<zacatek.length;i++){
        if(!(zacatek[i]==konec[i])){
            return false
        }
    }
    return true
}