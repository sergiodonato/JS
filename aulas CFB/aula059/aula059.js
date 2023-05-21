// Entendendo sobre Objetos #P3:
// 

class Pessoa {
    constructor(pnome, pidade) {
        this.nome = pnome
        this.idade = pidade
        this.canal = "Vultures Pinchers"
    }
    getNome() {
        return this.nome
    }
    getIdade() {
        return this.idade
    }
    setNome(nome) {
        this.nome = nome
    }
    setIdade(idade) {
        this.idade = idade
    }
    info() {
        console.log(`Nome : ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log("--------------------")
    }
}

// pessoas' serão criadas na HTML:

let pessoas = []

const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

// método para criar pessoa na HTML
const addPessoa = () => {
    // para não duplicar a saida na div, ao add nova pessoa:
    res.innerHTML = ""
    pessoas.map((p) => {
        const div = document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML = `Nome : ${p.getNome()}<br/>Idade: ${p.getIdade()}`
        res.appendChild(div)
    })
}

// poderia ser criado em uma linha, todavia, para fins didáticos se fará separado:
btn_add.addEventListener("click", (evt) => {
    // const p = new Pessoa(document.querySelector("#f_nome").value, document.querySelector("#f_idade").value)
    const nome = document.querySelector("#f_nome")
    const idade = document.querySelector("#f_idade")
    const p = new Pessoa(nome.value, idade.value)

    // adicionando pessoas no array pessoas:
    pessoas.push(p)
    // limpando os campos para novo elemento:
    nome.value = ""
    idade.value = ""
    nome.focus()
    addPessoa()
})