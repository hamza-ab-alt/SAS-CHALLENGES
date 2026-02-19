const prompt=require("prompt-sync")();
let nomb = Number(prompt("enter nomb a 3 chiffre : " ));
let inverse = nomb.toString().split("").reverse().join("");
console.log(inverse);
