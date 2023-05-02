// Loops FOR IN e FOR OF:
// of retorna elementos;
// in retorna as posições;

let num = [10, 20, 30, 40, 50]
//length retorna comprimento
for (let i = 0; i < num.length; i++){
    console.log(num [i] + ' é o elemento n°: ' + i)
}
console.log('-----Fim do Programa-----')

for( n in num){
    console.log(n)
}
console.log('-----Fim do Programa-----')

for( n in num){
    console.log(num [n])
}
console.log('-----Fim do Programa-----')

for( n of num){
    console.log(n)
}
console.log('-----Fim do Programa-----')
