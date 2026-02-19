const prompt=require("prompt-sync")();

let secname = prompt("enter your sec name");
let  name = prompt("enter your name");
let age = prompt("enter your age");
let sexe = prompt("enter your sexe");
let telnumb =  prompt("enter you telnumb");
console.log( `hi mr/ms ${secname} ${name}, your age is ${age} , you are a ${sexe} and your phone number is ^${telnumb}`);
3