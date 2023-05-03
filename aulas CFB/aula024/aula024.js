// Funções Anônimas:
// sem nome associado;
// será criada apenas no momento da execução;
// precisa ser associada a uma variável;

const f = function(v1, v2){return v1 + v2}

f(10, 5)
console.log(f)
console.log(f(10, 5))
console.log('-----Fim do Programa-----')

// usando parametros REST
const f2 = function(...valores){
    let res = 0
    for(v of valores){
        res += v
    }
    return res
}

f2(10, 5)
console.log(f2)
console.log(f2(10, 5))
console.log('-----Fim do Programa-----')

// usando "construtor" dentro da func. anonima;
// necessita de operador "new" + "F";
// o último parametro é o corpo da função:
const f3 = new Function("v1", "v2", "return v1 + v2")

f3(10, 5)
console.log(f3)
console.log(f3(10, 5))
console.log('-----Fim do Programa-----')