var fs = require("fs");
const { off } = require("process");
var input = fs.readFileSync("C:/Users/Běžný_člověk/Desktop/ksp2021/série 2/podivná brigáda/01 (1).in").toString()
input = input.split("\n")
input.shift()
let poradi = 0
let cas = 0

console.log(input)
function main(){
    if(poradi>=input.length-1){
        return cas
    }
cas += parseInt(input[poradi])
poradi++
console.log(cas)
    if(input[poradi-1] != input[poradi]){
        let rozdil = input[poradi]-input[poradi-1]
        let pocet=1
        for(;;){
            rozdil = rozdil-input[poradi+1]
            if(rozdil>=0){
                pocet++
            }else{
                break
            }
        }

        for(let i=0;i<pocet;i++){
            BereJenJeden()
        }
        main()
    } else{
        poradi++
        main()
    }
}

function BereJenJeden(){
    cas += parseInt(input[poradi])
    poradi++
}

main()

fs.writeFileSync("ksp2021kps-vystup.txt",cas +"")