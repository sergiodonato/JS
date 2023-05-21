// Entendendo sobre Objetos #P5:
// objetos literais;
// se tiver varios objetos da mesma classe, todos apontaram para o mesmo indereço de memória;

// cria objeto e colocar métodos e propriedades dele:
const Pessoa = {
    nome,
    idade,
    getNome: function(){
        return this.nome
    },
    getIdade: function(){
        return this.idade
    },
    setNome: function(nome){
        this.nome = nome
    },
    setIdade: function(idade){
        this.idade = idade
    }
}


const p2 = Pessoa
const p3 = Pessoa

// todos receberam o mesmo nome, ESTE É O CONCEITO DOS OBJETOS LITERAIS:
p3.nome = "Cladisvardson"
p2["nome"] = "Bridsgerstrudismeida"
Pessoa.setNome("Joenvile")

console.log(Pessoa.nome)
console.log(p2.getNome())
console.log(p3.nome)