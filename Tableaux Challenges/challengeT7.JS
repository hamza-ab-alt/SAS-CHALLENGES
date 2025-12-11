const prompt = require("prompt-sync")();
let mot = prompt("entrez un mot ").toLowerCase();
let tab = ["a", "e", "i", "o", "u", "y"];
let count = 0;
for (let i = 0; i < tab.length; i++) {
  for (let j = 0; j < mot.length; j++) {
    if (tab[i] == mot[j]) {
      count++;
    }
  }
}
console.log(count);
