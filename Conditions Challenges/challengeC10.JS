const prompt = require('prompt-sync')(); 
let nom  = String(prompt(" entrer le nome "))
let motpass = Number(prompt("entrer le mot passe"))
if ( nom === "admin" && motpass === 1234) {
    console.log("Bienvenue Admin");
}
else if (nom === "admin" && motpass !== 1234) {
    console.log("Mot de passe incorrect");
}
else  {
    console.log("Utilisateur introuvable");
}
