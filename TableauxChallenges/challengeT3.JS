const p = require("prompt-sync")();
let tab = [];
for (let i = 0; i <= 8; i++) {
  let n = Number(p(" entrez le nombre n : "));
  tab.push(n);
}
let nbr = Number(p("entrer le nombre que vous cherchez :"));
for (j = 0; j < tab.length; j++) {
  if (nbr == tab[j]) {
    console.log("le nombre", nbr, "existe dans ", j);
    break;
  }
}
