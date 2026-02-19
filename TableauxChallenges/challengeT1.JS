const prompt = require("prompt-sync")();

let tab = [];
for (let i = 0; i < 5; i++) {
  let n = parseInt(prompt("entrez un nombre n "));
  tab.push(n);
}
console.log(tab);
let rev = [...tab].reverse();
console.log(rev);
