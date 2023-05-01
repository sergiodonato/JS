let amigo = {nome: 'Planta',
cor: 'verde',
peso: 3,
regar(p=0) {
    console.log('Regada')
    this.peso += p
}
}

console.log(amigo)
amigo.regar(1)
console.log(amigo)