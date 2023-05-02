// ao transformar em array com o spreading, vc pode usar funcionalidades para o objeto, visto que agora ele é um array

const objs1 = document.getElementsByTagName("div")

const objs2 = [...document.getElementsByTagName("div")]

objs2.forEach(element => {element.innerHTML="pinchers"})

console.log(objs1)
console.log(objs2)