// Aprendendo sobre conversões de JSON e Objetos:
// conversão de objeto literal em JSON, e JSON em obj literal;
// úteis na hora de transmitir dados para uma API, para gravar em formato de dados, e posteriori receber possiveis tratamentos;

const pessoa = {
    nome: "Teteco",
    canal: "Pinchers Moonlight",
    curso: "Master Jump",
    aulas:{
        aula01: "Treino de perninhas",
        aula02: "Impulso com força",
        aula03: "Aterrissage com estilo"
    }
}

console.log(pessoa)
// console.log(pessoa.nome)
// console.log(pessoa.aulas)
// console.log(pessoa.aulas.aula03)

// para converter para JSON:
const s_json_pessoa = JSON.stringify(pessoa)

console.log(s_json_pessoa)

// string pega do console:
const string_pessoa = '{"nome":"Teteco","canal":"Pinchers Moonlight","curso":"Master Jump","aulas":{"aula01":"Treino de perninhas","aula02":"Impulso com força","aula03":"Aterrissage com estilo"}}'

// string acima para objeto:
// const o_json_pessoa = JSON.parse(string_pessoa)
const o_json_pessoa = JSON.parse(s_json_pessoa)
console.log(o_json_pessoa)