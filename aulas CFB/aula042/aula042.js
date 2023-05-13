// método FILTER:
// retorna array filtrado... :
// por padrão: .filter(valor, indice e array)

const idades = [15, 21, 30, 17, 18, 44, 12, 50]
// criando as partes separadas:
// const filtroMaior18 = (valor) => {
//     if(valor >= 18)
//         return valor
// }

// const maior = idades.filter(filtroMaior18)

// criando dentro do filtre:
const maior = idades.filter((val, ind, arr) => {
    if(val >= 18)
        return val
})

const menor = idades.filter((val, ind, arr) => {
    if(val < 18)
        return val
})

console.log(idades)
console.log(maior)
console.log(menor)


