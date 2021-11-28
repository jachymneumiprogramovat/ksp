var fs = require("fs");
//ten kterej bude snad jako jedinej upravenej
var novy = fs.readFileSync("C:/Users/Běžný_člověk/Desktop/ksp2021/cisla-domu/04.in").toString()
novy.toString()
novy = novy.split("\n")
novy.shift()
novy.pop() 

//potřebuju nějak uschovat ten první array abych to potom mohl porovnat
let stary = fs.readFileSync("C:/Users/Běžný_člověk/Desktop/ksp2021/cisla-domu/04.in").toString()
stary.toString()
stary = stary.split("\n")
stary.shift()
stary.pop()

var cisl = ""

function cislaDomu(){ 
    
   do{
       var vymena = false
        for(let i = 0;i<novy.length-1;i++){
        for(let h = 0;h<19;h++){

        if(novy[i].charAt(h)>novy[i+1].charAt(h)){
             let temp = novy[i];
				novy[i] = novy[i + 1];
				novy[i + 1] = temp;
             vymena = true
        break
                }

        else if(novy[i].charAt(h)<novy[i+1].charAt(h)){
        break
                }
            }
        }
    }while(vymena)

    for(let i = 0;i<novy.length;i++){
        stary[i] = novy.indexOf(stary[i])
        stary[i]++
        cisl+=stary[i] +"\n"
    }
}
cislaDomu()

fs.writeFileSync("ksp2021kps-letopocty-vystup.txt",cisl)



