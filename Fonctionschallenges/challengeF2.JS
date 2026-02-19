const prompt = require("prompt-sync")();
function sommeTableau() {
  let tab = [];
  for (let i = 0; i < 10; i++) {
    let n = parseInt(prompt(" entrez un nombre n "));
    tab.push(n);
  }
  console.log(tab);
  let somme = tab.reduce((a, b) => a + b, 0);
  return "la somme est " + somme;
}
console.log(sommeTableau());
console.log(sommeTableau());
console.log(sommeTableau());
