const prompt = require("prompt-sync")()

let soma = 0
let numero = 0

do{
    numero = Number(prompt("Digite um número: "))
    soma += numero

}while(numero != 0)

console.log(`A soma dos números digitados é de: ${soma}`)