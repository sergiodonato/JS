// Aprendendo sobre Desestruturação #P2:
//

// -- spread = jogou tudo que sobrou pra ultima variavel
let numeros = [10,20,30,40,50,60,70,80,90]

let [a,b,c,...d] = numeros

console.log(a)
console.log(b)
console.log(c)
console.log(d)

// -- nome do objeto tem q ser o mesmo das variaveis a serem aplicadas os valores
let obj = {nome: "Pincher", canal: "Pkn Pinchers", curso: "JS"}

let {nome, canal} = obj

console.log(nome)
console.log(canal)

// --ignorando o objeto retornado = com double virgula
const cores = () => {
  return ["verde", "amarelo", "azul", "branco"]
}

let[c1, c2,, c3] = cores()

console.log(c1)
console.log(c2)
console.log(c3)

// -- sem spread, fica apenas a primeira coisa'
let texto = 'curso de javascript'
let [...t] =texto.split(' ')
console.log(t)

let [p1,p2,p3] = texto.split(' ')
console.log(p1)
console.log(p2)
console.log(p3)