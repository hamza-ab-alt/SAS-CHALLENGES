const prompt = require("prompt-sync")();
let somme = 0;
for (let i = 1; i <= 10; i++) {
  let number = parseInt(prompt(" enter a number "));
  if (number > 0) {
    somme += number;
  }
}
console.log(somme);
