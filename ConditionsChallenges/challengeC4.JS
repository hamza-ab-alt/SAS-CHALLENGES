const prompt=require("prompt-sync")();
let A = Number(prompt("entrer le nombre A : " ));
let B = Number(prompt("entrer le nombre B : " ));
if (A > B) {
    console.log("le nombre max est : A "  );
}
else if (A == B) {
console.log("le nombre A = B" );
}
else {
    console.log(" le nombre max est : B "  );
    
}