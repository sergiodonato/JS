// Aprendendo sobre PROTOTYPE e POO - Objetos #P10:
// serve para qndo precisar adicionar uma propriedade ou um método a um objeto, principalmente se for objeto de função;
// usado para ser feito em tempo real;

const Nave = function(energia){
    this.energia = energia
    this.disparos = 100
}

const n1 = new Nave(100)

// add nova propriedade:
Nave.prototype.vidas = 3

// método para efetuar disparos:
Nave.prototype.disparar = function(){
    if(this.disparos > 0){
        this.disparos--
    }
}

console.log(Nave)
console.log(n1)
console.log(n1.vidas)
console.log(n1.disparos)

n1.disparar()
console.log(n1.disparos)