const prompt = require("prompt-sync")()

let diametro = Number(prompt(`Digite o diâmetro do círculo: `))

let area = 3.14 * (diametro * diametro) / 4
let perimetro = (2 * 3.14) * (diametro / 2)

console.log(`A área do círculo é de: ${area} e o perimetro é de: ${perimetro}.`)