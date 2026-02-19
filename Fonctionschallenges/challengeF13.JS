const prompt = require("prompt-sync")();

function motsLongs() {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    let mot = String(prompt(" entrez un mot "));
    if (mot.length >= 10) {
      arr.push(mot);
    }
  }
  return arr;
}
console.log(motsLongs());
