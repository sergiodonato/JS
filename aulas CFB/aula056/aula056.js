// Template Strings:
// nova forma de tratar strings;
// concatena conteudos de variáveis externas de forma mais simples, usando ' ` ';

const caixa = document.querySelector("#caixa")
const caixa2 = document.querySelector("#caixa2")

const curso = "Javascript"
const canal = "Pinchers Assalt"
const frase = "Este é o curso de " + curso + "<br/> do canal " + canal

const carros = ["fuca", "gipe", "kombi", "nave"]

let ul = `<ul>`
carros.map((el) => {
    ul += `<li>${el}</li>`
})
ul + `</ul>`

const frase2 = `Este é o<br/>
 curso de ${curso} do<br/>
 canal ${canal}`

// caixa.innerHTML = frase
caixa.innerHTML = ul

caixa2.innerHTML = frase2