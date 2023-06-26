// Aprendendo programar animação #P2:
// pegar uma propriedade, e trabalhar com seus valores...
// tornando animação automática:
// - terá que usar intervalos...

const carro = document.getElementById("carro")
const btn_parar = document.getElementById("btn_parar")
const btn_esquerda = document.getElementById("btn_esquerda")
const btn_direita = document.getElementById("btn_direita")

// -- aqui se adiciona as propriedades, que serão usadas pelos botões:
const init = () => {
    carro.style = "position: relative; left: 0px"
}

let anima = null

const move = (direcao) => {
    carro.style.left = parseInt(carro.style.left) + (10*direcao) + "px"
}

btn_parar.addEventListener("click", () => {
    clearInterval(anima)
})

btn_esquerda.addEventListener("click", () => {
    clearInterval(anima)
    anima = setInterval(move, 50, -1)
})

btn_direita.addEventListener("click", () => {
    clearInterval(anima)
    anima = setInterval(move, 50, 1)
})



// -- pode ser feito de 2 maneiras, para chamar a função em callback ao iniciar:
// window.addEventListener("load", init())
window.onload = init