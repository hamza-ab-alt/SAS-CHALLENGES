const prompt = require("prompt-sync")();
let arr = [];
for (let i = 0; i < 5; i++) {
  let n = Number(prompt("entrez un nombre n "));
  arr.push(n);
}
console.log(arr);
function doubler() {
  let tab = [];
  for (let j = 0; j < arr.length; j++) {
    tab.push(arr[j] * 2);
  }
  return tab;
}
console.log(doubler(arr));
