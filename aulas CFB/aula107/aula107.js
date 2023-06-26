// Aprendendo programar animação #P1:
// pegar uma propriedade, e trabalhar com seus valores...

const carro = document.getElementById("carro")
const btn_esquerda = document.getElementById("btn_esquerda")
const btn_direita = document.getElementById("btn_direita")

// -- aqui se adiciona as propriedades, que serão usadas pelos botões:
const init = () => {
    carro.style = "position: relative; left: 0px"
}

// -- forma integral de escrever(a função de alterar position):
btn_direita.addEventListener("click", () => {
    let pos = parseInt(carro.style.left)
    pos += 10
    carro.style = `position: relative; left: ${pos}px`
})

// -- forma resumida de escrever(a função de alterar position):
btn_esquerda.addEventListener("click", () => {
    carro.style.left = parseInt(carro.style.left) - 10 + "px"
})


// -- pode ser feito de 2 maneiras, para chamar a função em callback ao iniciar:
// window.addEventListener("load", init())
window.onload = init