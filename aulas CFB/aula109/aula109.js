// Diferença entre setInterval e setTimeout - Animação #P3:
// pegar uma propriedade, e trabalhar com seus valores...
// tornando animação automática:
// - terá que usar intervalos...
// trocar setInterval por setTimeOut(usando recursividade):

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
    anima = setTimeout(move, 50, direcao)
}

btn_parar.addEventListener("click", () => {
    clearTimeout(anima)
})

btn_esquerda.addEventListener("click", () => {
    clearTimeout(anima)
    move(-1)
})

btn_direita.addEventListener("click", () => {
    clearTimeout(anima)
    move(1)
})



// -- pode ser feito de 2 maneiras, para chamar a função em callback ao iniciar:
// window.addEventListener("load", init())
window.onload = init