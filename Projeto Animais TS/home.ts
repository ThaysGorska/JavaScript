const prompt = require("prompt-sync")()

import { Cachorro } from "./src/cachorro"
import { Cavalo } from "./src/cavalo"
import { Preguica } from "./src/preguica"

console.log("*****Bem-Vindo ao Zoológico da Thays*****")
console.log
let cachorro = new Cachorro ("Hernesto", 14)
let cavalo = new Cavalo ("Patrício", 27)
let preguica = new Preguica ("Filomena", 32)


console.log("Escolha o animal que deseja conhecer: \n" +
    "1- Cachorro \n" +
    "2- Cavalo \n" +
    "3- Preguiça \n")

let opc = Number(prompt("Digite a opção desejada: "))

if(opc == 1){
    cachorro.mostrarDados()
    cachorro.emitirSom()
    cachorro.correr()
    cachorro.saber()
}

else if(opc == 2){
    cavalo.mostrarDados()
    cavalo.emitirSom()
    cavalo.trotar()
    cavalo.saber()
}

else if(opc == 3){
    preguica.mostrarDados()
    preguica.emitirSom()
    preguica.subir()
    preguica.saber()
}else{
    console.log("Opção inválida!")
}

    