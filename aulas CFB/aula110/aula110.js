// Aprendendo programar animação em #P4:
// limitar dentro da tela a animação:

const carro = document.getElementById("carro")
const btn_parar = document.getElementById("btn_parar")
const btn_esquerda = document.getElementById("btn_esquerda")
const btn_direita = document.getElementById("btn_direita")

let anima = null

// -- criado para ter o tam máx:
let tamMax = null

const init = () => {
    carro.style = "position: relative; left: 0px; width: 100px"
    tamMax = window.innerWidth - parseInt(carro.style.width)
}

const move = (direcao) => {
    if(direcao > 0){
        if(parseInt(carro.style.left) <= tamMax){
            carro.style.left = parseInt(carro.style.left) + (10*direcao) + "px"
            anima = setTimeout(move, 50, direcao)
        } else {
            clearTimeout(anima)
        }
    }else if(direcao < 0){
        if(parseInt(carro.style.left) >= 0){
            carro.style.left = parseInt(carro.style.left) + (10*direcao) + "px"
            anima = setTimeout(move, 50, direcao)
        } else {
            clearTimeout(anima)
        }
    }
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

// -- resize faz o tamMax reconhecer o width atual: 
window.addEventListener("load", init())
window.addEventListener("resize", () => {
    tamMax = window.innerWidth - parseInt(carro.style.width)

})