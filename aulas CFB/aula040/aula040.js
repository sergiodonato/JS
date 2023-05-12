// Criando novos elementos e adicionando no DOM:
// 
const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]

// chama createElemente e oq criar, e aonde anexar
// const novoElemento = document.createElement("div")
// novoElemento.setAttribute("id", "c7")
// novoElemento.setAttribute("class", "curso c1")
// novoElemento.innerHTML = "ReactNative"
// anexa filho
// caixa1.appendChild(novoElemento)

// criando várias element(as div do html estarão comentadas'), posterior adicionados dinamicamente:
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]

// usando a chave para criar o id de cada elemento:
cursos.map((el, chave) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + chave+1)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el
    caixa1.appendChild(novoElemento)
})