const prompt=require("prompt-sync")();

let n = parseInt(prompt(" entrer un nombre n " ));
if (n % 2 == 0) {
    console.log(" le nombre n est pair" );
}
else {
    console.log("le nombre est impair" );
}