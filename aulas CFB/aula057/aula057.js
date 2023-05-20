// Entendendo sobre Objetos:
// usando operador new ou com classes literais;
// constructor = metodo automaticamente chamado qndo instancia novo objeto desta classe;
// dentro da classe pode ser declarado qntas propriedades quiser, e até funções;

// caso o construtor não tenha parametro, ao instanciar a classe tb não há parametros;
// class Pessoa{
//     constructor(){
//         this.nome = "Teteco"
//     }
// }

// cria em um espaço da memória um objeto p1 do tipo Pessoa, com propriedade nome e seu devido valor(construtor chamado pelo "new"):
// let p1 = new Pessoa()
// console.log(p1)


// colocando parametro no constructor:
class Pessoa{
    constructor(pnome){
        this.nome = pnome
    }
}

let p1 = new Pessoa("Teteco")
let p2 = new Pessoa(10)

console.log(p1.nome)
console.log(p2.nome)