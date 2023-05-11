// Parando a propagação do evento com o método stopPropagation:

const caixa1 = document.querySelector("#caixa1")
const btn_c1 = document.querySelector("#c1")
const cursos = [...document.querySelectorAll(".curso")]


// o click do evento abaixo se dá para toda #caixa1;
caixa1.addEventListener("click", () => {
    console.log("clicou")
})

// para o ato do click não propagar para #c1
// btn_c1.addEventListener("click", (evt) => {
//     evt.stopPropagation()
// })

// para o click ñ propagar para o .curso
cursos.map((el) => {
    el.addEventListener("click", (evt) => {
        evt.stopPropagation()
    })
})