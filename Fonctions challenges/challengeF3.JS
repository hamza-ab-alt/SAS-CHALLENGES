const prompt = require("prompt-sync")();
let tab = [];
for (let i = 0; i < 6; i++) {
  let n = Number(prompt("entrez un number n "));
  tab.push(n);
}
function maxtableau(tab) {
  let max = Math.max(...tab);
  return `le max nombre dans le tableau est :${max}`;
}
console.log(maxtableau(tab));
