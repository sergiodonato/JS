// Aprendendo sobre Objetos Literais #P2:
// usando object construtor

const objetos = document.getElementById("objetos")

const computador = {
    cpu: "i5",
    ram: "6gb",
    hd: "750gb",
    info: function(){
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD: ${this.hd}`)
    }
}

// formas de add propriedades(ñ é herdado para o clone de assign):
computador["monitor"] = "17pol"
computador.nome = "atual"

// essa deleção altera a clonagem de assign:
delete(computador.hd)

// formas de imprimir de forma orientada:
// console.log(computador.cpu)
// console.log(computador["monitor"])
// console.log(computador)

// assign: clonando objeto:
const c1 = Object.assign({}, computador)
c1.info()

// create: criando a partir do objeto:
const c2 = Object.create(computador)
c2.cpu = "i9"
c2.ram = "32gb"
c2.hd = "2tb"
c2.info()


const o1 = {obj1: '1'}
const o2 = {obj1: '2'}
const o3 = {obj1: '3'}
// assign: mesclando objetos:
const o4 = Object.assign(o1, o2, o3)
console.log(o4)


const computadores = [
    {
        cpu: "i5",
        ram: "6gb",
        hd: "750gb"
    },
    {
        cpu: "i7",
        ram: "8gb",
        hd: "480gb"
    },
    {
        cpu: "i9",
        ram: "16gb",
        hd: "1Tb"
    }
]


computadores.forEach((c) => {
    const div = document.createElement("div")
    div.innerHTML = c.cpu + "<br/>" + c.ram + "<br/>" + c.hd
    div.setAttribute("class", "computador")
    objetos.appendChild(div)
})

/* computador.info()
console.log(computadores)
objetos.innerHTML = JSON.stringify(computadores) */