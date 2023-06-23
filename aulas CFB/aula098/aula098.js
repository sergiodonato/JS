// Aprendendo sobre a função SYMBOL #P1:
// gera identificador unico dentro de um objeto, o id fica interno a priori...

const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol.for("Teteco")
const s4 = Symbol.for("Teteco")

console.log(s1)
console.log(s2)

console.log(s1 == s2)
console.log(s1 === s2)

console.log(typeof(s1))

// --- assim ficam iguais, pois tem o mesmo identificador: ---
console.log(s3 == s4)

// --- keyfor, trabalha com quem ganhou registrador global: ---
console.log(Symbol.keyFor(s1))
console.log(Symbol.keyFor(s4))