var fs = require("fs");
var axios = require("axios");
var input = fs.readFileSync("C:/Users/Běžný_člověk/Desktop/ksp2021/hadani-cisel/01.in").toString()

let odpoved;
let min = 0
let max = input.split("\n")[0]
max = parseInt(max)

let url = input.split("\n")[1]

//`&q=${tip}`

async function main(tip) {
	// dostaň odpověď od serveru a zavolej co chceš
	await axios.get(url + `&q=${tip}`).then(response => {
		loop(response.data.toString())
	});
}




async function loop(res){
    let mid = Math.floor((max+min)/2)
res= res.trim()
    if(res=="Trefa"){
        odpoved = mid
    }
    else if(res=="Uber"){
        max=mid + 1
        main(mid)
        console.log(res, mid)
    }
    else if(res=="Pridej"){
        min=mid
        main(mid)
        console.log(res, mid, max, min, max>min)
        }
}
main(100)

fs.writeFileSync("ksp2021kps-letopocty-vystup.txt",odpoved +" ")
