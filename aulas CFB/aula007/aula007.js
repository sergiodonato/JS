// Operadores Lógicos
/*
&& - and
|| - or
! - not
*/

let n1, n2, n3, n4
n1 = 10
n2 = 5
n3 = 15
n4 = 2

console.log((n1 > n2) && (n3 > n4))
console.log((n1 > n2) || (n3 > n4))

console.log((n1 > n2) && (n3 < n4))
console.log((n1 < n2) || (n3 < n4))

console.log(!((n1 > n2) && (n3 < n4)))
console.log(!((n1 < n2) || (n3 < n4)))

 
