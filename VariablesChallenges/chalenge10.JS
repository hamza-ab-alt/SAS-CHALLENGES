const prompt=require("prompt-sync")();

let euro = Number(prompt("entrer l' argent en euro" ));
let MAD = euro/10.61
console.log("l'argent en MAD est " +MAD);
