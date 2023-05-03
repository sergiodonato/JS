// FUNÇÕES com retorno:
// ao executar o return, a função termina, dando seu retorno;

function canal(){    
    return "Pinchers Cursos"
}

canal()
console.log('Console.log imprimindo o retorno da função canal: ' + canal())

console.log('-----Fim do Programa-----')

function multiplicacao(){
    let n1 = 10
    let n2 = 2
    let res = n1 * n2
    if (res % 2 == 0)
        return "Par"
    else
        return "Impar"
}

let res = multiplicacao()

console.log(res)

