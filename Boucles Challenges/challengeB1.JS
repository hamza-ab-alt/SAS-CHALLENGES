const prompt = require("prompt-sync")();
let n = Number(prompt(" entrer le nombre n "));
for (let i = 0; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}
