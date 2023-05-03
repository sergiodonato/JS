// FUNÇÕES parametrizadas:
// valores passados, podem ser operados dentro da função;

// Neste exemplo pode haver concatenação number + string
function soma(n1 = 0, n2 = 1){
    console.log(n1 + n2)
}    
    
soma(4.2, 5)
soma("te", 2)
soma("Te", "teco")
soma()
soma("Teteco", true)

console.log('-----Fim do Programa-----')
//
const valorPadrao = 0
function soma2(n1 = valorPadrao, n2 = valorPadrao){
    let res
    res = n1 + n2
    return res
}

console.log(soma2(4.2, 5))
console.log(soma2("te", 2))
console.log(soma2("Te", "teco"))
console.log(soma2())
console.log(soma2("Teteco", true))

let resultado_soma = soma2(5, 5)
console.log(resultado_soma)

console.log('-----Fim do Programa-----')

let valor = 0
console.log(valor)

function add (v) {
    return valor + v
}

valor = add(10)
console.log(valor)

valor = add(5)
console.log(valor)

console.log('-----Fim do Programa-----')
// pode operar uma variável dentro de uma função:
let valor2 = 10
console.log(valor2)

function add2 (v) {
    valor2 += v
}

add2(10)
console.log(valor2)

add2(5)
console.log(valor2)

console.log('-----Fim do Programa-----')