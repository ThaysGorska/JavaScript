import { Animal } from "./animal";

export class Cavalo extends Animal{

    override emitirSom(): void {
        super.emitirSom
        console.log("O cavalo está: Relinchando")
    }

    trotar(){
        console.log("O cavalo está: Trotando")
    }

    saber(){
        console.log("Curiosidade: Cavalos tem excelente memória. Eles são capazes de reconhecer uma pessoa anos" +
        " depois de tê-la visto pela última vez.")
    }
}