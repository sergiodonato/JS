// RegEx Expressões Regulares #P2:
// 

let nome = new String ("Teteco Tigrinho Tigroso 2019")
let nome2 = new String ("Tetecoooo Tigrinho Tigrosssso 2019")
let email = "teteco@teteco.com.br"
let numeros = "0, 1, 10, 100, 1000"

console.log(nome)

console.log(nome.search("Tigrinho"))
console.log(nome.search("tigrinho"))
console.log(nome.search(/tigrinho/i)) // tira case sensitive

console.log(nome.match("o"))
console.log(nome.match(/o/g)) // global
console.log(nome.match(/O/g))
console.log(nome.match(/O/ig))

console.log(nome.replace("Tigrinho", "Feioso"))
console.log(nome.replace("tigrinho", "Feioso"))
console.log(nome.replace(/tigrinho/i, "Feioso"))
console.log(nome.replace(/O/ig, "Lindão"))

console.log(nome.match(/[oi]/g)) // mais de uma coisa usar '[]'
console.log(nome.match(/[a-j|s-x|0-5]/g)) // char to char '-',  + =  '|'

// --- meta caracteres:
console.log(nome.match(/\d/ig)) // \d retorna numeros
console.log(nome.match(/\s/ig)) // espaços
console.log(nome.match(/\bT/ig)) // letras

// --- qntificadores:
console.log(nome.match(/o/ig))
console.log(nome2.match(/o/ig))
console.log(nome2.match(/o+|s+/ig)) // agrupa combos'
console.log(nome.match(/ig/ig)) // todos ig'
console.log(nome.match(/ig*/ig)) // todos i', ig'
console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))