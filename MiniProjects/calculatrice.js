const prompt = require("prompt-sync")();
let array = [];
let oper
const menu = `
0-quitter
1-addition (+)
2-soustraction (-)
3-multiplication (x)
4-division (/)
5-puissance (^)
6-racine carrée (√)
7-factoriel(!)
8-historique
`;
function addition() {
  let a = Number(prompt(" entrez  le premier nombre "));
  let b = Number(prompt(" entrez le deuxieme nombre "));
  let oper = a + b;
  console.log(oper);
  array.push(`${a} + ${b} = ${oper}`);
  MenuPrincipal();
}
function soustraction() {
  let a = Number(prompt(" entrez  le premier nombre "));
  let b = Number(prompt(" entrez le deuxieme nombre "));
  let oper = a - b;
  console.log(oper);
  array.push(`${a} - ${b} = ${oper}`);
  MenuPrincipal();
}
function multiplication() {
  let a = Number(prompt(" entrez  le premier nombre "));
  let b = Number(prompt(" entrez le deuxieme nombre "));
  let oper = a * b;
  console.log(oper);
  array.push(`${a} x ${b} = ${oper}`);
  MenuPrincipal();
}
function division() {
  let a = Number(prompt(" entrez  le premier nombre "));
  let b = Number(prompt(" entrez le deuxieme nombre "));
  if (b !== 0) {
    let oper = a / b;
    console.log(oper);
  } else {
    console.log(" entrez un valeur contrairement à zéro ");
  }
  array.push(`${a} / ${b} = ${oper}`);

  MenuPrincipal();
}
function Puissance() {
  let a = Number(prompt("Entrer la base : "));
  let b = Number(prompt("Entrer la puissance : "));
  oper = a ** b;
  console.log(oper);
  array.push(`${a} power ${b} = ${oper}`);
  MenuPrincipal();
}
function Racinecarrée() {
  let a = Number(prompt("Entrer un nombre : "));
  oper = Math.sqrt(a);
  console.log(oper);
  array.push(`√ ${a} = ${oper}`);
  MenuPrincipal();
}
function Factorielle() {
  let a = Number(prompt("Entrer un nombre : "));
  let oper = 1;
  for (i = 1; i <= a; i++) {
    oper *= i;
  }
  console.log(oper);
  array.push(`${a}! = ${oper}`);
  MenuPrincipal();
}
function Historique() {
  console.table(array);
  MenuPrincipal();
}

function MenuPrincipal() {
  console.log(menu);
  let choix = parseInt(prompt("Choisie un operation : "));

  switch (choix) {
    case 1:
      addition();
      break;
    case 2:
      soustraction();
      break;
    case 3:
      multiplication();
      break;
    case 4:
      division();
      break;
    case 5:
      Puissance();
      break;
    case 6:
      Racinecarrée();
      break;
    case 7:
      Factorielle();
      break;
    case 8:
      Historique();
      break;
    case 0:
      console.log("fin");
      process.exit();

    default:
      console.log("Choix invalid !!");
      MenuPrincipal();

      break;
  }
}
MenuPrincipal();
array.push(MenuPrincipal());
console.log(array);
