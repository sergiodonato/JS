// Método getElementsByClassName. Manipulando DOM:
// retorna conj. de elementos, HTMLcollection;
// pode ser transformado em array tb(auxiliado com operador spread);

const cursosTodos = [...document.getElementsByClassName("curso")]

const cursosC1 = [...document.getElementsByClassName("c1")]

const cursosC2 = [...document.getElementsByClassName("c2")]

// criando um marcação para elemento especifico:
const cursoEspecial = document.getElementsByClassName("curso")[2]

console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)

// coloquei class destaque (!important), a todos elementos, com uso de map;

// cursosTodos.map((el) =>{
//     el.classList.add("destaque")
// })

// colocando class destaque apenas a class c1;
cursosC1.map((el) =>{
    el.classList.add("destaque")
})

//console.log('-----Fim do Programa-----')

