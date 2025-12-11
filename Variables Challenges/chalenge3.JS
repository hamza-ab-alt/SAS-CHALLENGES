const prompt=require("prompt-sync")();

let A = Number(prompt("enter num A "));
let B = Number(prompt("enter num B "));
let C = Number(prompt("enter num C "));
console.log("A " +A);
console.log("B " +B);
console.log("C " +C);
let D = A ;
A = B ;
B = C ;
C = D ;
console.log('after change');

console.log("A " +A);
console.log("B " +B);
console.log("C " +C);


