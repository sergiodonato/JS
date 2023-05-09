// operador THIS:
// referencia a variavel ao parametro da função;

function aluno(nome, nota){
    this.nome = nome
    this.nota = nota

    console.log(nome)
    console.log(nota)
}

aluno("Teteco", 100)
console.log('-----Fim do Programa-----')

// setTimeout : atrasa a função;
// operador "new";
// arrow func.: dropa o valor por usa o contexto do pai/root;
function aluno2(nome, nota){
    this.nome = nome
    this.nota = nota

    this.dados_anonimo = function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
    
    this.dados_arrow = function(){
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
}
const al1 = new aluno2("Tezinho", 102)
al1.dados_anonimo()
al1.dados_arrow()
