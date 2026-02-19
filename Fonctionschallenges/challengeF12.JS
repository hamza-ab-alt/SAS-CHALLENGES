const prompt =  require ("prompt-sync")();
let n = parseInt(prompt(" entrez un nombre n "))

function tableMultiplication(){
    let arr = [];
    for (let i = 0; i < 10 ; i++) {
        
    arr.push(n * i)
}
return arr ;
}
console.log(tableMultiplication());
