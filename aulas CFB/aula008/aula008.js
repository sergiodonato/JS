// Operadores Bitwise

let n1, n2
n1 = 10
n2 = 11

let res = n1 & n2
// bit 1 + bit 1 = 1
console.log(res) // logo isso dá 10

res = n1 | n2
// bit 1 + bit 1 ou bit 0 = 1
console.log(res) // logo isso dá 11

res = n1 ^ n2
// bit 1 + bit 1 = 0
// bit 0 + bit 0 = 0
// bit 1 + bit 0 = 1
console.log(res) // logo isso dá 1

res = n1 << 1
// desloca cadeia de bits para esquerda
// dobra valor decimal
console.log(res) // logo isso dá 20

res = n1 << 2
// desloca cadeia de bits para esquerda
// dobra valor decimal 2x
console.log(res) // logo isso dá 40

res = n1 >> 1
// desloca cadeia de bits para direita
// divide valor decimal
console.log(res) // logo isso dá 5

res = n1 >> 2
// desloca cadeia de bits para direita
// divide valor decimal 2x
console.log(res) // logo isso dá 2 (valor int)