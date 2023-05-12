// Entendendo a relação dos elementos no DOM p2:
// 
const caixa1 = document.querySelector("#caixa1")
const btn_c = document.querySelectorAll(".curso")

console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)
console.log(btn_c[0].children)
console.log(btn_c[0].parentNode)

// para achar o avô:
//console.log(btn_c[0].parentNode.parentNode)

// achar o tio:
//console.log(btn_c[0].parentNode.children[x])

// teste com condição ternária:
console.log(caixa1.children.length > 0 ? "Possui filhos" : "Não possui filhos")
console.log(btn_c[0].children.length > 0 ? "Possui filhos" : "Não possui filhos")

console.log(caixa1.firstElementChild.innerHTML="TESTE")
console.log(caixa1.children[1].innerHTML="TESTE 2")