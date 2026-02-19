const prompt = require("prompt-sync")();
let arr = [];
for (let i = 0; i < 10 ; i++) {
   let n = prompt(" entrez un nombre n ");
arr.push(n)
}
function supprimerDoublons() {
    return[... new Set(arr)];

}
console.log(supprimerDoublons());
