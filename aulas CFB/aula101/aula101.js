// Funções para manipulação de STRING #P1:
// 'nome'. abre várias propriedades:


let nome = new String("Teteco")
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