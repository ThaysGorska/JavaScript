const prompt = require("prompt-sync")()

let cont21 = 0
let cont50 = 0

while(true){
    let idade = Number(prompt("Digite sua idade: "))

    if(idade <= 21){
        cont21++
    }else if (idade >= 50){
        cont50++
    }
    if(idade == -99){
        break
    }
}

console.log(`O total de pessoas com menos de 21 anos é: ${cont21}`)
console.log(`O total de pessoas com mais de 50 anos é: ${cont50}`)