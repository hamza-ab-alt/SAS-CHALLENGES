const prompt  = require("prompt-sync")();
let arr = [];
for (let i = 0; i < 6 ; i++) {
    let n = Number(prompt("entrez un nombre n "));
    arr.push(n)   
}
console.log(arr);
function  moyenne(){
    let somme = arr.reduce((a, b) => a + b, 0 );
let moy = somme /6 ;
return moy
    
}
console.log(moyenne(arr));
