const prompt = require("prompt-sync")();
function remplirTableau(){
 let tab = []
    for (let i = 0 ; i < 10 ; i++) {
        let n = Number(prompt(" entrez un nombre n "));
        tab.push(n);
        
    }
    console.log(tab);
    }
    remplirTableau();

