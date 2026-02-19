const prompt = require('prompt-sync')();
let n = Number(prompt("entrer le nombre n : " ))
switch (true) {
    case (n % 3 == 0 && n % 5 == 0):
        console.log("fizzbuzz");
        break;
        case ( n % 3 == 0):
            console.log("fizz");
            break;
            case ( n % 5 == 0 ):
                console.log("buzz");
                break;
    default:
        console.log("ma fizz ma buzz");
        break;
}