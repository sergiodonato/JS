// Aprendendo sobre ARRAY:
// coleção de dados/variaveis;
// matrizes = array dentro de array;

const caixa = document.querySelector("#caixa")

let cores = ["azul", ["verde", "verdinho"], "vermelho"]
let cursos = ["HTML", "CSS", "Javascript", cores]

// unshift adiciona no inicio:
cursos.unshift(2022, "Lógica de programação")
// shift remove do inicio:
cursos.shift()
// push adiciona no final:
cursos.push("C++", "Python", 2023, 2050)
// pop remove do final:
cursos.pop()
// adiciona em lugar especifico:
cursos[7] = "fim"

console.log(cursos[4][1][1])

cursos.map((el) => {
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})



