// FUNÇÕES:
// bloco de comando executável em momento oportuno dentro do programa;

// Declaração da função: 
function nome(){
    console.log('Pinchers Cursos')
}

// Chamada da função:
nome()
nome()

for(let i = 0; i < 5; i ++){
    nome()
}
console.log('-----Fim do Programa-----')

function soma2_10(){
    let n1 = 2
    let n2 = 10
    let soma = n1 + n2
    console.log(soma)
}

soma2_10()
console.log('-----Fim do Programa-----')

function mudarTexto(){
    let d1 = document.getElementById("d1")
    let d2 = document.getElementById("d2")
    let d3 = document.getElementById("d3")
    d1.innerHTML = "Pinchers Cursos"
    d2.innerHTML = "Pinchers Cursos"
    d3.innerHTML = "Pinchers Cursos"
}


