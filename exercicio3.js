const prompt = require("prompt-sync")()

let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))

let resposta = num1 + num2

if(resposta % 2 == 0){
    console.log(`A soma entre os dois números é de: ${resposta} e o número é PAR!`)
}else{
    console.log(`A soma entre os dois números é de: ${resposta} e o número é ÍMPAR!`)
}