// declarações BREAK e CONTINUE:
// BREAK: encerra loop e continua programa;
// CONTINUE: para interação corrente e continua o loop;

let n = 0
let max = 1000

while (n < max){
    console.log("Pinchers Cursos - " + n)
    if (n > 10){
        break
    }
    n ++
}

console.log('-----Fim do Programa-----')

n = 0
let pares = 0

for (let i = n; i < max; i ++){
    if (i % 2 != 0){
        continue
    }
    pares ++ 
}

console.log("qtdd de pares: " + pares)
console.log('-----Fim do Programa-----')
