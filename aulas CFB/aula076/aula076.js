// Aprendendo sobre Promise #-P2 :

// colocando promise dentro da func., para ser executada a la carte:

const numero = document.getElementById("numero")
const btn_promessa = document.getElementById("btn_promessa")


btn_promessa.addEventListener("click", (evt) => {

    numero.innerHTML = "Processando..."
    promessa()
    console.log(promessa())
    .then((retorno) => {
        numero.innerHTML = retorno
        numero.classList.remove("erro")
        numero.classList.add("ok")
    })    
    
    .catch((retorno) => {
        numero.innerHTML = retorno
        numero.classList.add("erro")
        numero.classList.remove("ok")
    })
})


const promessa = () => {
    
    let p = new Promise((resolve, reject) => {
        let resultado = true
        let tempo = 3000
    
        setTimeout(() => {
            if(resultado){
                resolve("Deu tudo certo")
            } else {
                reject("Deu tudo errado!!")
            }
        }, tempo)
    })    
    return p
}


numero.innerHTML = "Esperando"