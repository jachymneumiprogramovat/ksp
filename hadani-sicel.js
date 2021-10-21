//input
var fs = require("fs");
var axios = require("axios")
var input = fs.readFileSync("C:/Extrení disk - Lokálně/zalohy/Jachym/kód/ksp2021/hadani-cisel/01.in").toString()

let odpoved;
let min = 0
let max = input.split("\n")[0]

let url = input.split("\n")[1]

//pokus o komunikaci se servrem
async function zkouska(tip){
const odpoved =await axios.get(url + `&q=${tip}`).then(resp =>resp.datat)
return odpoved
}

//rozděl a panuj
async function loop(){
for(;min<max;){
    let mid = Math.floor((max+min)/2)
    if(zkouska(mid)=="Trefa"){
        odpoved = mid
        break;
    }
    else if(zkouska(mid)=="Uber"){
        max=mid
    }
    else if(zkouska(mid)=="Pridej"){
        min=mid + 1
        }
    }
}
fs.writeFileSync("ksp2021kps-letopocty-vystup.txt",odpoved +" ")
