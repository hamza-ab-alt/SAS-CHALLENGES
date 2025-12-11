const prompt=require("prompt-sync")();
let Age = Number(prompt("entrer l'age" ))
if (Age >= 18) {
    console.log( "éligible" );
}
else {
    console.log( "non éligible" );
}
