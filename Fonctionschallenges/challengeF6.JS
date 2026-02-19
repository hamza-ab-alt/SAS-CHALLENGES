 const prompt = require('prompt-sync')();
arr = [] ;

for (i = 0 ; i < 10 ; i++) {
    let n = parseInt(prompt('Entrer un nombre n : '));
    arr.push(n);
}
function filtrerpairs() {
    let pairs = [];
    pairs.push(arr.filter( arr => arr % 2 == 0));
    return pairs;
    
}
console.log(filtrerpairs(arr));


  
 

