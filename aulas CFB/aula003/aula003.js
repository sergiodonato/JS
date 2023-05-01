"use strict"

//variavel local, uso do 'var torna acessivel
//let deixa local mesmo!
function teste(){
    let velocidade = "mto rápido"
    var nome = "Teteco"
    if(true){
        console.log("dentro do if do teste: " + velocidade)
    }
    console.log("dentro do teste: " + velocidade)
}

teste()
//console.log(nome)
//console.log("fora do teste: " + velocidade)


//const deixa valor fixo no código todo!
const curso = "CFB"
console.log(curso)
