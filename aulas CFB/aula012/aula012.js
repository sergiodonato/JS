// Operador Spread, aprendendo sobre o espalhador em Javascript
// ajuda na hora de copiar arrays

let n1 = [10, 20, 30]
let n2 = [11, 22, 33, 44, 55]
let n3 = [...n1, ...n2]

console.log('n1: ' + n1)
console.log('n2: ' + n2)
console.log('n3: ' + n3)
//
let j1, j2, j3
j1 = {nome: 'Te', energia: 100, vidas: 3, magia: 150}
j2 = {nome: 'Minie', energia: 90, vidas: 5, velocidade: 80}
j3 = {...j1, ...j2}

console.log(j3)
// mesmo se tiver mais valores no array, ele pega os x primeiros
const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
}
let valores = [1, 4, 5, 10]

console.log(soma (valores))
console.log(soma (...valores))
