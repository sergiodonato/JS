// Entendendo sobre Objetos #P2:
// pode se criar propriedades além de métodos para classe;
// no exemplo ele retornará a 'info, sem ter de chamar as caracteristicas separadamente;


class Carro{
    canal = "Pinchers Vulture"
    constructor(pnome, ptipo){
        this.nome = pnome
        this.canal = "Vultures Pinchers"
        if(ptipo == 1){
            this.tipo = "Esportivo"
            this.velmax = 300
        }else if(ptipo == 2){
            this.tipo = "Utilitário"
            this.velmax = 100
        }else if(ptipo == 3){
            this.tipo = "Passeio"
            this.velmax = 160
        }else{
            this.tipo = "Militar"
            this.velmax = 180
        }
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velmax
    }
    getInfo(){
        return [this.nome, this.tipo, this.velmax]
    }
    setNome(nome){
        this.nome = nome
    }
    setTipo(tipo){
        this.tipo = tipo
    }
    setVelMax(velMax){
        this.velMax = velMax
    }
    info(){
        console.log(`Nome : ${this.nome}`)
        console.log(`Tipo : ${this.tipo}`)
        console.log(`V.max: ${this.velmax}`)
        console.log(`Canal: ${this.canal}`)
        console.log("--------------------")
    }
}

let c1 = new Carro("Nave", 1)
let c2 = new Carro("Nutela", 2)
let c3 = new Carro("Bombadão", 5)
let c4 = new Carro("Pau", 3)

// aqui o c.log aprimorado:
// pode chamar a info geral, algum parametro apenas, o array da getInfo, posso criar um método que muda a propriedade:
c1.info()
console.log(c1.getNome())
console.log(c1.getInfo())
c1.setNome("Fugueti")
c1.setTipo("Fast&Gordeus")
c1.setVelMax(1000)
c1.info()


// console.log(c1.nome)
// console.log(c1.tipo)
// console.log(c1.velmax)
// console.log(c2.nome)
// console.log(c3.nome)
// console.log(c4.nome)