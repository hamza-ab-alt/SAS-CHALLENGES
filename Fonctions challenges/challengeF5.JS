const prompt = require("prompt-sync")();
let tab = [];
for (let i = 0; i < 5; i++) {
    let n = parseInt(prompt("entrez un nombre n "));
    tab.push(n);
}
console.log(tab);
function  inverserTableau(){
let rev = [...tab].reverse();
return `l'ivers des nombre dans le tableau est :${rev}`;
}
console.log(inverserTableau(tab));