import { Animal } from "./animal"

export class Cachorro extends Animal{
    
    override emitirSom(): void {
        super.emitirSom
        console.log("O cachorro está: Latindo")
    }

    correr(){
        console.log("O cachorro está: Correndo")
    }

    saber(){
        console.log("Curiosidade: O olfato canino é 1 milhão de vezes melhor do que o dos humanos e o nariz de cada cachorro é único," +
        "assim como nossa impressão digital.")
    }
}