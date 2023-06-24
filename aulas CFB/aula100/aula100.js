// Aprendendo mais sobre a função SYMBOL #P3:
// 

const nome = Symbol("nome")
const numero = Symbol("numero")
const corUniforme = Symbol("corUniforme")

// console.log(nome.description)

// --- se colocar [] ele vira symbol: ---
const Jogador = {
    [nome] : "j1",
}

// --- pode ser add fora do objeto: ---
// --- hide proprietys': ---
Jogador[numero] = 10,
Jogador[corUniforme] = "amarelo"

// --- não pode ser acessado casa haja symbol []: ---
for(p in Jogador) {
    console.log(p)
}

console.log(Jogador)
console.log(`Nome do jogador: ${Jogador[nome]}`)
console.log(`Numero do jogador: ${Jogador[numero]}`)
