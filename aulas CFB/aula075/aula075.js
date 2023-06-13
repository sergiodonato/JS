// Aprendendo sobre Promise:

// recurso que permite trabalhar com operações assíncronas de maneira mais conveniente e eficiente.
// pode encadear chamadas usando os métodos then() e catch(). O método then() é chamado quando a Promise é resolvida com sucesso, e o método catch() é chamado quando a Promise é rejeitada com um erro.
// finally(), que é chamado independentemente de a Promise ser resolvida ou rejeitada, e Promise.all(), que permite trabalhar com várias Promises simultaneamente.

const numero = document.getElementById("numero")


let promessa = new Promise((resolve, reject) => {
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


// caso de certo
promessa.then((retorno) => {
    numero.innerHTML = retorno
    numero.classList.remove("erro")
    numero.classList.add("ok")
})


// caso de errado
promessa.catch((retorno) => {
    numero.innerHTML = retorno
    numero.classList.add("erro")
    numero.classList.remove("ok")
})


numero.innerHTML = "Processando..."