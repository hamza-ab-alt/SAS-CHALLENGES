const prompt = require('prompt-sync')();
let motpass = prompt("entrer le mot pass : " )
if (motpass.length < 6 ) {
    console.log("mot passe faible" );
}
else if (motpass.length >= 8 && /\d/.test(motpass) && /[@#$:;!%^&*.?]/.test(motpass)) {
console.log("mote passe fort ");
}

else if (motpass.length >= 6 && /\d/.test(motpass) ) {
console.log("mote passe moyen ");
}

else {
    console.log("Veuillez taper un mot de passe valide");
}










































// const p = require("prompt-sync")
// let password = p("Enter a password : ");
// if(password.length<6){
//     console.log("Faible");
// }else if(password.length>=8 && /\d/.test(password) && /[@#$:;!%^&*.?]/.test(password)){
//     console.log("Fort")
// }else if(password.length>=6 && /\d/.test(password)){
//     console.log("Moyen");
// }else{
//     console.log ("Veuillez taper un mot de passe valide");
// }
// //(/[0-9]/g))