var fs = require("fs");
var axios = require("axios")
var input = fs.readFileSync("C:/Extrení disk - Lokálně/zalohy/Jachym/kód/ksp2021/hadani-cisel/01.in").toString()

let odpoved;
let min = 0
let max = input.split("\n")[0]

let url = input.split("\n")[1]

async function zkouska(tip){
axios.get(url+"&q="+tip)
.then(resp => {
    return resp.data
}).catch(console.log("tohle je pěkně v prcici"))
}

for(;min < max;){
    let mid = (max+min)/2
    if(zkouska(mid)=="Trefa"){
        odpoved = mid
        break;
    }
    else if(zkouska(mid)=="Uber"){
        max=mid
    }
    else{
        min=mid + 1
    }
}
fs.writeFileSync("ksp2021kps-letopocty-vystup.txt",odpoved +" ")
