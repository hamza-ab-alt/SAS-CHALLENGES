const prompt = require("prompt-sync")();
let n = Number(prompt(" entrez un nombre n "))
let inv = n.toString().split("").reverse().join("");
console.log(inv);
