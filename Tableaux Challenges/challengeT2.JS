const prompt = require("prompt-sync")();
let tab = [];
for (let i = 0; i < 10; i++) {
  let n = parseInt(prompt(" entrez un nombre n "));
  tab.push(n);
}
console.log(tab);
let somme = tab.reduce((a, b) => a + b, 0 );
console.log("la somme est " + somme);
let moyenne = somme / 10;
console.log("la moyenne est "  + moyenne);
