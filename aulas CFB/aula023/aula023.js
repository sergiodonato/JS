// Parâmetros REST em funções:
// funções parametrizadas;
// ñ precisa especificar a qtdd de parametros que serão enviados para dentro da func.;

// usar length para dar o comprimento do array
function soma(...valores){
    return valores.length
}    

console.log(soma(4, 5))
console.log(soma(4, 5, 3, 2, 1, 21))

console.log('-----Fim do Programa-----')
//
function soma2(...valores){
    let tam = valores.length
    let res = 0
    for(let i = 0; i < tam; i ++){
        res += valores[i]
    }
    return res
}    

console.log(soma2(4, 5))
console.log(soma2(4, 5, 3, 2, 1, 21))

console.log('-----Fim do Programa-----')
// usando "for of"
function soma3(...valores){    
    let res = 0
    for(let v of valores){
        res += v
    }
    return res
}    

console.log(soma3(4, 5))
console.log(soma3(4, 5, 3, 2, 1, 21))

console.log('-----Fim do Programa-----')