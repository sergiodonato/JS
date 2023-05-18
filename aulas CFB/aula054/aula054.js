// Aprendendo sobre a Coleção MAP:
// sempre add (chave: valor);
// chaves únicas, valores podem serem repetidos;

const caixa = document.querySelector("#caixa")
// essa chamada reserva na memória um coleção:
let mapa = new Map()

mapa.set("curso", "Javascript")
mapa.set(10, "Pinchers Crunchus!")
mapa.set(1, 100)
mapa.set("canal", 100)

console.log(mapa)

//poderia ter uma variavel para ser pesquisada
let res = 10
// pesquisa + ação:
if(mapa.has(res)){
    caixa.innerHTML = "A chave existe na coleção, chave: " + mapa.get(res)
}else{
    caixa.innerHTML = "A chave NÃO está na coleção"
}

// concatenando texto de tamanho da coleção:
caixa.innerHTML += "<br/> O tamanho da coleção é: " + mapa.size

//mostrando no console a coleção:
mapa.forEach((el) => {
    console.log(el)
})

// delete, pesquisa pela chave:
mapa.delete(1)

// mostrando após ação do delete:
console.log(mapa)
mapa.forEach((el) => {
    console.log(el)
})


// chamando o valor do curso para a caixinha da HTML:
// caixa.innerHTML = mapa.get("curso")