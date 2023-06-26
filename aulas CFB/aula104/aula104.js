// Funções para manipulação de STRING #P4:
// métodos novos*


let nome = new String("Teteco Super Bonzinho")

console.log(nome.startsWith("T")) // id de inicio de string
console.log(nome.endsWith("Bonzinho")) // ambos podem ser char ou string
console.log(nome.includes("er") || nome.includes(" ")) // em alguma parte da string

// nome = nome.repeat(3) >> colocaria 3x a string
console.log(nome.repeat(3))

console.log(nome.charCodeAt(0))
console.log(nome.charCodeAt(1))
console.log(nome.charCodeAt(2))
console.log(nome.charCodeAt(3))
console.log(nome.charCodeAt(4))
console.log(nome.charCodeAt(5))

console.log(String.fromCodePoint(84, 101, 116, 101, 99, 111)) // >> código pra char

let nome_ts = "Teteco"
console.log(`${nome_ts} filhotico`)
