// Aprendendo sobre Objetos Literais #P1:
// só de por {}'s já vira objeto;
// add classe, mostrar formatado, mostrar no console...


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

// formas de add propriedades:
computador["monitor"] = "17pol"
computador.nome = "atual"

console.log(computador)

// formas de imprimir de forma orientada:
console.log(computador.cpu)
console.log(computador["monitor"])


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