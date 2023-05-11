// Adicionando eventos com addEventListener:
// funções podem ser disparadas a cada acontecimento;
// podem ser programados dentro das tags ou dentro dos arquivos .js;

function msg(){
    alert("clicou via .js")
}

// pode ser func anonima, usando arrow func.
const msg2 = () => {
    alert("clicou na arrow anonima funcktion!")
}

// fazendo da forma padrãofifa, chamando função pré-existente:
const c4 = document.querySelector("#c4")

c4.addEventListener("click", msg)
// função anonima fazedora de action!:
const c5 = document.querySelector("#c5")

c5.addEventListener("click", () => {
    alert("clicou padrão fifa")
})
// buscando o target do evento
const c6 = document.querySelector("#c6")

c6.addEventListener("click", (evt) => {
    console.log(evt.target)
})
// adicionando classe destaque no target
// const c7 = document.querySelector("#c7")

// c7.addEventListener("click", (evt) => {
//     const el = evt.target
//     el.classList.add("destaque")
// })

// colocando evento destaque para todos do c2:
const cursosC2 = [...document.querySelectorAll(".c2")]

cursosC2.map((el) => {
    el.addEventListener("click", (evt) => {
        const el = evt.target
        el.classList.add("destaque")
        console.log(el.innerHTML + " foi clicado")
    })
})

//console.log('-----Fim do Programa-----')

