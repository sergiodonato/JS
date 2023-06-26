// RegEx Expressões Regulares #P1:
// 

let nome = new String ("Teteco Tigrinho Tigroso")
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