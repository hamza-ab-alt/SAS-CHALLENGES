const prompt = require("prompt-sync")();
let tab = [];
for (let i = 0; i < 3 ; i++) {
    let car = prompt(" entrez un car :");
    tab.push(car);
}
console.log(tab);
let ch = prompt("entrez le ch que vous recherche :")
for (let j = 0; j <= tab.length; j++) {
   if (ch === tab[j]) {
        console.log(`la chain : ${ch}est trouvé dans la position : ${j}` );
   }
    
}
