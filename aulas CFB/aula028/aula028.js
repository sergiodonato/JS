// método MAP:
// quando precisar operar todos elementos de uma coleção, 'percorrer eles';

const cursos = ['karate', 'judo', 'capoeira', 'jiu-jitsu']
// parametros: elemento, indice, 
cursos.map((el, i) => {
    console.log("Curso: " + el + " - Posição do curso: " + i)
})
console.log('-----Fim do Programa-----')

let c = cursos.map((el, i) =>{
    return el
})
console.log(c)
console.log('-----Fim do Programa-----')

let c2 = cursos.map((el, i) => {
    return "<div>" + el + "</div>"
})
console.log(c2)

console.log('-----Fim do Programa-----')

let el = document.getElementsByTagName("div")
el = [...el]
el.map((e, i) => {
    console.log(e)
    e.innerHTML = "Pinchers Cursos"
})

// poderia usar o map sem associar com coleção, passando os parametros ao ser chamado:
/*
const el = document.getElementsByTagName("div")
const val = Array.prototype.map.call(el, ({innerHTML}) => innerHTML)
console.log(val) 
*/