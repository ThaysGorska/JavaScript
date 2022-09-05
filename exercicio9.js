const prompt = require("prompt-sync")()

let soma = 0
let cont = 0
let media = 0
let numero = 0

do{
    numero = Number(prompt("Digite um número: "))

    if(numero % 3 == 0 && numero != 0){
        cont++
        soma = soma + numero
        media = soma / cont
    }
}while(numero != 0)

console.log(`A média dos números múliplos de 3 é: ${media}`)