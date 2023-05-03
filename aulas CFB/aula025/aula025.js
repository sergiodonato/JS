// Arrow Function:
// funções lambdas, representam func anônimas;

//const soma = function(v1, v2){return v1+v2}
const soma = (v1, v2) => {return v1 + v2}

console.log(soma(10, 5.2))
console.log(soma("T", "e"))
console.log(soma("te", 2))
console.log('-----Fim do Programa-----')

// para parâmetro único, não precisa dos "()":
const nome = n => n

console.log(nome("Teteco"))
console.log('-----Fim do Programa-----')

// operação simples, sem uso do "return":

const add = n => n + 10

console.log(add(10))
console.log('-----Fim do Programa-----')

// funções simples ñ precisam de "()" ou "{}", mas funções elaboradas sim:
const soma2 = (v1, v2) => {
    let res = v1 + v2
    return res
}

console.log(soma2(10, 5))