const prompt = require("prompt-sync")();
let arr = [];
let array = [];

for (i = 0; i < 5; i++) {
  let n = prompt("Entrer un nombre  : ");
  arr.push(n);
}
for (j = 0; j < 5; j++) {
  let elm = prompt("Entrer un valeur : ");
  array.push(elm);
}

function fusionner() {
  console.log(arr);
  console.log(array);

  let tab = [arr + "," + array];
  return tab;
}
console.log(fusionner());
