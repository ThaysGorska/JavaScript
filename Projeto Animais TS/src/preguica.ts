import { Animal } from "./animal";

export class Preguica extends Animal{

    override emitirSom(): void {
        super.emitirSom
        console.log("A preguiça está: Fazendo um som estranho")
    }

    subir(){
        console.log("A preguiça está subindo na árvore")
    }

    saber(){
        console.log("Curiosidade: As preguiças são excelentes nadadoras e conseguem prender a respiração de baixo da água por 40 minutos.")
    }
}