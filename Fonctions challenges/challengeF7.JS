const prompt = require("prompt-sync")();
let tab = [];
for (let i = 0; i < 5 ; i++) {
    let n = Number(prompt("entrez un nombre n "));
    tab.push(n);
}
function produitTableau(){ 
    let produit = 1; 
    for (let i = 0; i < tab.length; i++) { 
    produit *= tab[i]; 
} 
return produit; 
}
console.log("le produit est " +produitTableau(tab));
