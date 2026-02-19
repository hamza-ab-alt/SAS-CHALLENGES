const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));
let count = 0;

for (let i = 2; i < n; i++) {
  if (n % i === 0) {
    count++;
  }
}
if (n <= 1) {
  console.log("machi premier !");
} else if (count > 0) {
  console.log("machi premier");
} else {
  console.log(" premier");
}



