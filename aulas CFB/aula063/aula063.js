// Exercício sobre Classes #P1 - Objetos #P7:
// Não consegui setar classes distintas para a criação das divs entre os tipos de carros(para terem visualização diferente na HTML)!

// cetando as coisas da HTML:
const f_tipoMilitar = document.querySelector("#f_tipoMilitar")
const f_tipoNormal = document.querySelector("#f_tipoNormal")
const f_blindagem = document.querySelector("#f_blindagem")
const f_municao = document.querySelector("#f_municao")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")
const carros = document.querySelector("#carros")
const btn_addCarro = document.querySelector("#btn_addCarro")


// criando array para os carros:
let a_carros = []

// ao clicar no radio tipo militar resetar os campos e habilitar blindagem e munição:
f_tipoMilitar.addEventListener("click", (evt) => {
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})

// clicar normal, reseta campos e disabled munição e blindagem:
f_tipoNormal.addEventListener("click", (evt) => {
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.setAttribute("disabled", "disabled")
    f_municao.setAttribute("disabled", "disabled")
})

// cria a div com itens dos carros:
const gerenciarExibicaoCarros = () => {
    carros.innerHTML = ""
    a_carros.forEach((c) => {
        const div = document.createElement("div")
        div.setAttribute("class", "carro")
        div.innerHTML = `Nome: ${c.nome}<br/>`
        div.innerHTML += `Portas: ${c.portas}<br/>`
        div.innerHTML += `Cor: ${c.cor}<br/>`
        div.innerHTML += `Blindagem: ${c.blindagem}<br/>`
        div.innerHTML += `Munição: ${c.municao}<br/>`
        carros.appendChild(div)
    })
}

// adiciona os carros na array:
btn_addCarro.addEventListener("click", () => {
    if (f_tipoNormal.checked) {
        const c = new Carro(f_nome.value, f_portas.value)
        a_carros.push(c)
    } else {
        const c = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        a_carros.push(c)
    }
    gerenciarExibicaoCarros()
})

// construtor pai:
class Carro {
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function () {
        this.ligado = true
    }
    desligar = function () {
        this.ligado = false
    }
    setCor = function (cor) {
        this.cor = cor
    }
}

// construtor filho
class Militar extends Carro {
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Verde")
    }
    atirar = function () {
        if (this.municao > 0) {
            this.municao--
        }
    }
}

// outro filho, que não foi usado em tal exemplo:
class Normal extends Carro {
    constructor(nome, portas, lugares) {
        super(nome, portas)
        this.lugares = lugares
    }
}
