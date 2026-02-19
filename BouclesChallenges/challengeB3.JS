const prompt = require("prompt-sync")();
let sum = 0;
let max = 0;

while (true) {
  let n = Number(prompt("Entrez un nombre (<100, 0 pour terminer): "));

  if (n === 0) {
    break;
  }

  if (n > 100) {
    console.log("Valeur ignorée (supérieure à 100)");
    continue;
  }

  if (n > 0) {
    sum += n;
    if (n > max) {
      max = n;
    }
  }
}

console.log("Somme des valeurs valides:", sum);
console.log("Maximum des valeurs valides:", max);
