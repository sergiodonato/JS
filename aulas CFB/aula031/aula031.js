// Método getElementsByTagName. Manipulando DOM:
// ..byId retorna 1 elemento;
// ..byTagName retorna coleção de elementos;
// cada coleção(array, collection), vai me possibilitar uma gama de métodos a serem utilizados;

const dc1 = document.getElementById("c1")
const dc2 = document.getElementById("c2")
const dc3 = document.getElementById("c3")
const dc4 = document.getElementById("c4")
const dc5 = document.getElementById("c5")
const dc6 = document.getElementById("c6")

const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6]
//console.log(arrayElementos)

// fazendo o spreed, para usar map em HTMLcollection
const colecaoHTML = [...document.getElementsByTagName("div")]

console.log(colecaoHTML)

colecaoHTML.map((e) => {
    console.log(e)
})

//console.log('-----Fim do Programa-----')

