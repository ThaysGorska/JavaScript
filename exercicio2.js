const prompt = require("prompt-sync")()

let numero = Number(prompt("Digite um número: "))

if(numero > 100){
    console.log(`O valor do número é: ${numero}`) 
}else{
    numero = 0
    console.log(`O valor digitado é igual a: ${numero}`)
}

