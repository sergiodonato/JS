// Aprendendo mais sobre a função SYMBOL #P2:
// 

class Jogador {
    constructor (nome) {
        this.nome = nome
        this.id = Symbol()
    }
}

let jogadores = [
    new Jogador ("j1"),
    new Jogador ("j2"),
    new Jogador ("j3"),
    new Jogador ("j1"),
    new Jogador ("j2"),
    new Jogador ("j4")
]

// --- dando jogador para o elemento s1: ---
/* let s1 = jogadores[0].id
console.log(s1) */

// --- pelo id, tira s1, que fora nomeado acima: ---
/* jogadores = jogadores.filter((j) => {
    return j.id != s1
})
*/

// --- pelo nome, tira todos j1: ---
/* jogadores = jogadores.filter((j) => {
    return j.nome != "j1"
})
console.log(jogadores) */


// --- array com j1, os symbols deles: ---
let s = []

let s_jogadores = jogadores.filter((j) => {
    return j.nome == "j1"
})

s = s_jogadores.map((j) => {
    return j.id
})

console.log(s_jogadores)
console.log(s)