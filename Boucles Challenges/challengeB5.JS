const prompt = require("prompt-sync")();
let n = parseInt(prompt("entrez le nombre n" ))
let i = 2
while (i<=n) {
    let count = 0 
    for (let j = 2; j <= Math.sqrt(i);j++) {
        if (i % j == 0) {
            count ++
            break;
        }
          
    }
    if (!count) {
        console.log(i);
        
    }
    i++;
}