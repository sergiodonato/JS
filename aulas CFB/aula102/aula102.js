// Funções para manipulação de STRING #P2:
//


let nome = new String("Teteco")
let nome2 = new String("Teteco")
let nome3 = new String("Totoco Nariz Quadrado")
let canal = new String("PinchersCurso")


console.log(nome)
console.log(typeof(nome))

console.log(nome.charAt(0))
console.log(nome.charCodeAt(0))

console.log(nome.concat(canal))
console.log(nome)

nome = nome.concat(canal)
console.log(nome) // recebe nome concatenado
console.log(typeof(nome)) // vira string normal'

nome = new String("Teteco") // para retornar o padrão inicial
console.log(nome)

console.log(nome.indexOf("et")) // retorna posição do primeiro caracter

console.log(nome.lastIndexOf("e"))

// --- por serem objetos ñ são considerados iguais: ---
console.log(nome==nome2 || nome===nome2)

// --- -1, 0, 1 : |1|= diferente; 0= iguais: ---
console.log(nome.localeCompare(nome2))
console.log(nome.localeCompare(nome3))

console.log(nome2.replace("o", "ones"))

console.log(nome.search("e"))

console.log(nome.slice(0,2))

let sobrenome = nome3.slice(7, 50) // chutar segundo parametro alto, é trick'...
console.log(sobrenome)

let arr_nome = nome3.split(" ")
console.log(arr_nome)