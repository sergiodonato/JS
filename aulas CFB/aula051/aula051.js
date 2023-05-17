// Aprendendo ITERADORES e elementos iteráveis:
// coleções iteraveis :
// Arrays | String | Map | Sets
// iteradores oculta operações com elementos, para simplificar;

const valores = [10, 8, 9, 2]
const it_valores = valores[Symbol.iterator]()

const texto = "Youtube"
const it_texto = texto[Symbol.iterator]()

console.log(valores)
console.log(it_valores.next().value)
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())

console.log(texto)
console.log(it_texto.next().value)
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())