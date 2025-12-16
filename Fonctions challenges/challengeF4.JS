const prompt = require("prompt-sync")();
function compterOccurrences() {
arr = [];
count = 0;
for (let i = 0; i < 10; i++) {
  let n = Number(prompt("entrez un nombre n "));
  arr.push(n);
}
let c = Number(prompt(" entrez le nombre voud vouler rechercher "));
  for (i = 0; i < arr.length; i++) {
    if (c == arr[i]) {
      count++;
      
    }
  }
  console.log(`Le nombre entree aparait dans le tableau ${count} fois .`);
  
}
compterOccurrences();






// const prompt = require('prompt-sync')();
// array = [] ;

// for (i = 0 ; i < 10 ; i++) {
//     let n = Number(prompt('Entrer un nombre n : '));
//     array.push(n);
// }

// function compterOccurrences(array) {
//     let c = Number(prompt('Entrer le nombre vous vouler rechercher : '));
//     let index = array.filter(n => n === c ).length; 
//  if (index !== -1 ){
//     console.log(Le nombre entree apparaît dans le tableau ${index} fois .);

//  }
//  else {
//     console.log(Le nombre entree n'ai exist pas . );

//  }

// }compterOccurrences(array);