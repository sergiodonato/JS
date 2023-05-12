// Entendendo a relação dos elementos no DOM:
// parents ---- >
// elemento filho, do first pro last child;
// elemento raiz
// elem. irmão : siblings, do first pro last;

const caixa1 = document.querySelector("#caixa1")
const btn_c = document.querySelectorAll(".curso")

console.log(caixa1.children[caixa1.children.length-1])

console.log(caixa1.lastElementChild)

console.log(caixa1.firstElementChild)

console.log(caixa1.children)

console.log(document.getRootNode())

console.log(btn_c[0].ownerDocument)