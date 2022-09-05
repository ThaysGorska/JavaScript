const prompt = require("prompt-sync")()

let peso = Number(prompt("Digite o peso do tomates: "))

let excesso = peso - 50
let multa = 0

if(excesso > 0){
    multa = 4 * excesso

    console.log(`O valor da multa a ser paga é de: R$ ${multa}, pois o excesso de tomates é de: ${excesso} kg.`)
}else{
    multa = 0
    excesso = 0

    console.log(`Não há multa a ser paga, pois os tomates estão dentro do limite de peso!`)
}