// Aprendendo sobre a Coleção SET:
// não permite entrada duplicada de valores;
// no mesmo molde do map, tendo q instanciar a coleção com operador "New", para reservar memória;
// como Map, posso add elementos no próprio construtor;

const caixa = document.querySelector("#caixa")

let musicas = new Set(["musica1", "musica boa", "musica10"])

musicas.add("Chora viola")
musicas.add("musica1")

console.log(musicas)

musicas.delete("musica1")

// adicionar musicas na box da HTML, forEach método do Set(pode add no Map tb):
// musicas.forEach((el) => {
//     caixa.innerHTML += el + "<br/>"
// })

// adicionando com "for of", método externo:
for(let m of musicas){
    caixa.innerHTML += "<div>" + m + "</div>" + "<br/>"
}


// clear pra limpar, todavia já aviada repassado para a HTML:
musicas.clear()
console.log(musicas)