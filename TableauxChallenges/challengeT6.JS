const prompt = require("prompt-sync")();
let tab = [];
for (let i = 0; i < 6; i++) {
  let n = parseInt(prompt(" entrez un nombre n "));
  tab.push(n);
}
console.log(tab);
let tableau = tab.map(num => num * num) 
console.log(tableau);
