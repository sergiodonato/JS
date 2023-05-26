// Aprendendo sobre membros Static e POO - Objetos #P9:
// pode criar métodos ou atributo com um membro Static, assim pode ser invocado sem ter instanciado a classe:

// criando um game, classe Npc:
class Npc{
    // definido como atributo:
    static alerta = false
    constructor(energia){
        this.energia = energia
    }
    info = function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(Npc.alerta ? "Sim" : "Não")}`)
        console.log("----------------")
    }
    // definido como um método:
    static alertar = function(){
        Npc.alerta = true
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(30)

Npc.alertar()

npc1.info()
npc2.info()
npc3.info()