const prompt = require("prompt-sync")();
// let N = Number(prompt(" enter a numpber N " ));
// let n = parseInt(prompt(" enter a number n" ));
// let i = 1

while (true) {
  let base = Number(prompt(" enter a numpber base : "));
  let power = Number(prompt(" enter a power : "));
  if (base > 0 && power >= 0) {
    console.log(`${base} ^ ${power} = ${base ** power}`);

    break;
  }
}
