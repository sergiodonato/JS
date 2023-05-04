// Funções Geradoras:
// retorno adiado até ser necessário;
// pilar da programação assincrona;
// pode ir retornando a medida que for chamado;
// usa "*" para ser indicada + "yield";

// a função é 'gasta, reloada com criação de iterators
function* cores(){
    yield "vermelho"
    yield "verde"
    yield "azul"
}

const itc = cores()

console.log(itc)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log('-----Fim do Programa-----')

function* perguntas(){
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    return 'Seu nome é ' + nome + ', seu esporte favorito é ' + esporte
}

const itp = perguntas()

console.log(itp.next().value)
console.log(itp.next('Te').value)
console.log(itp.next('Luta').value)
console.log('-----Fim do Programa-----')

function* contador(){
    let i = 0
    while(true){
        yield i++
    }
}

const itcont = contador()

for(let i = 0; i < 10; i++){
    console.log(itcont.next().value)
}

console.log('-----Fim do Programa-----')

function* contador2(){
    let i = 0
    while(true){
        yield i++
        if (i > 5)
            break
    }
}

const itcont2 = contador2()

for(let c of itcont2){
    console.log(c)
}
console.log('-----Fim do Programa-----')