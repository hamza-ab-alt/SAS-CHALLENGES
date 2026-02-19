const prompt=require("prompt-sync")();

let disKm = Number(prompt("entrer la distance en Km " ));
let disM = disKm/1.609
console.log("la distance en miles est " + disM  );


