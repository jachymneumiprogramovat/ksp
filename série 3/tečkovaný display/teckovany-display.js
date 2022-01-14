var fs = require("fs")
var input = fs.readFileSync("C:/Users/Běžný_člověk/Desktop/ksp2021/série 3/tečkovaný display/01 (5).in").toString()
input = input.split("\n")
let info = input[0].split(" ")
input.shift()

let nazvy =[]
let displaye =[]

let ans =""

let width = info[0]
let spravne =info[2]
let display = info[3]

    for(let i=0;i<spravne;i++){
        nazvy.push(input.splice(0,width))
}
    for(let j=0;j<display;j++){
        displaye.push(input.splice(0,width))
}


for(let i in displaye){
    if(jednoznacne(i)==1){
        ans+="ANO"+"\n"
    }else{
        ans+="NE"+"\n"
    }
}

function jednoznacne(dis){
let je =0
loop1:
    for(let j in nazvy){
        loop2:
        for(let i=0;i<j.length;i++){
            loop3:
            for(let g=0;g<width;g++){
                console.log(j[i].split("")[g],dis[i].split("")[g])
                if(j[i].split("")[g]=="."&&dis[i].split("")[g]!="."){
                    continue loop1;
                }
            }
        }
        je++
    }
    return je
}


fs.writeFileSync("ksp2021kps-letopocty-vystup.txt",ans)
