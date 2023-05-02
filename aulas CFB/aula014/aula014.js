// Comando Switch Case:
// bloco default caso não tenha opção que satifaça a análise;
// alternativa para if, caso saiba certamente os casos a serem avaliados;

let colocacao = 5

switch(colocacao){
    case 1:
        console.log("1° Lugar")
        break
    case 2:
        console.log("2° Lugar")
        break
    case 3:
        console.log("3° Lugar")
        break
    case 4: case 5: case 6:
        console.log("Premio de participação")
        break
    default:
        console.log("Não subiu ao podio")
        break
}
