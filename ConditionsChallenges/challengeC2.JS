const prompt=require("prompt-sync")();
let n = Number(prompt("entrer un nombre n" ));
if (n < 0) {
    console.log("le nombre n est neg" );
}
else if (n > 0 ) {
    console.log("le nombre est pos" );
}
else {
    console.log("le nombre est nul" );
}