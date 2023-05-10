// Método getElementById. Manipulando DOM:
// metodos de lado cliente, que manipulão o DOM, tem de verificar no inspec da página;
// as coisas são feitas na ordem...

const dc1 = document.getElementById("c1")
const dc2 = document.getElementById("c2")
const dc3 = document.getElementById("c3")
const dc4 = document.getElementById("c4")
const dc5 = document.getElementById("c5")
const dc6 = document.getElementById("c6")

const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6]

// for(d of arrayElementos)
//     d.innerHTML = "Pinchers Cursos"

// usando map, (elem, indic, array);
// usado para percorrer e iterar os elementos;
arrayElementos.map((e) => {
    console.log(e)
    e.innerHTML = "Pinchers Cursos"
})

// console.log(arrayElementos)

//console.log(dc1) // elemento em si
//console.log(dc1.id) // imprimindo id
//console.log(dc1.innerHTML) // innerHTML

//dc1.innerHTML = "Pinchers Curso" // alterando elemento

//console.log('-----Fim do Programa-----')

