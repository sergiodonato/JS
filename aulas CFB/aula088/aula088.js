// Aprendendo sobre as Caixas de Diálogo:
//


const btn_alert = document.getElementById("btn_alert")
const btn_confirm = document.getElementById("btn_confirm")
const btn_prompt = document.getElementById("btn_prompt")

btn_alert.addEventListener("click", (evt) => {
    alert("Sallveee turminha!!")
})

btn_confirm.addEventListener("click", (evt) => {
    const ret = confirm("Já fez bom menino hj?!")
    if(ret){
        console.log("ok to go")
    }else {
        console.log("faça bom menino!")
    }
})

btn_prompt.addEventListener("click", (evt) => {
    const nome = prompt("Digite o nome do Te", "área do nome")
    if(nome == null){
        console.log("apertou o cancelar")
    }else {
        console.log(nome)
    }
})