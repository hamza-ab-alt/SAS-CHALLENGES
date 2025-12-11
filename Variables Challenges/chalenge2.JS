const prompt=require("prompt-sync")();
let c =Number(prompt("enter temperature :"));
let F = (c * 1.8) + 32;
console.log(`vlue the ${F}`);