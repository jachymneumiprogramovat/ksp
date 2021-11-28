const fs = require("fs")
var input = fs.readFileSync("C:/Users/Běžný_člověk/Desktop/ksp2021/série 2/dýňová polívka/04 (1).in").toString()
input = input.split("\n")
let odpoved = 0

for(let i=0;i<input.length;i++){
    input[i]=input[i].split(" ")
}

let time = input[0][1]
let travel = input[0][0]
time = parseInt(time)
travel = parseInt(travel)


input.shift()


for(let i=0;i<input.length;i++){
    let curr = (travel*i)+time + (odpoved*10)
    if(input[i][0]<=curr && input[i][1]>=curr){
        odpoved++
   }
}
fs.writeFileSync("ksp2021kps-vystup.txt",odpoved+" ")