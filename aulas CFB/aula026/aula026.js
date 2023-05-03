// Funções dentro de funções:
// 

// "arrow" func., usando "spread" para criar conceito de parâmetro "REST"
// soma pega e espalha os valores em uma array;
// somar faz adição de cada valor;
const soma = (...valores) => {
    const somar = val => {
        let res = 0
        for(v of val)
            res += v
        return res
    }
    return somar(valores)
}

console.log(soma(10, 5, 15))
console.log('-----Fim do Programa-----')

