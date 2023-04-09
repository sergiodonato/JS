let valores = [1, 4, 2, 8, 3, 9]

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

valores.sort()
console.log('Ordenando de forma crescente os valores:')

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


let pos = valores.indexOf(2)
console.log(`O valor 2 está na posição ${pos}`)

