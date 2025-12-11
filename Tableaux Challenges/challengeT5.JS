const prompt = require("prompt-sync")();
let tab = [];
for (let i= 0; i < 7; i++) {
    let n = parseInt(prompt(" entrez le nombre n "));
    tab.push(n)    
}
console.log(tab);
let max = Math.max(...tab)
let min = Math.min(...tab)




// let max = tab[0]
// let min = tab[0]

// for (let i = 0; i < tab.length; i++) {
//     if (tab[i] > max) {
//         max = tab[i]
//     }
    
//    for (let i = 0; i < tab.length; i++) {
//    if (tab[i] < min ) {
//     min = tab [i]
//    }
    
//    } 
// }
console.log("le max est " +max);
console.log("le min est " +min);
