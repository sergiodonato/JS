// Casos em que o Ponto e Vírgula é obrigatório em Javascript #P1:
// ';' avisa qndo a instrução terminou...

let i = null;

// -- mostra todo processo de incremento do i, visto que o ';' está no final de ambas sentenças
// for (i = 0; i < 10; i++) console.log(i);

// -- mostra apenas o resultado final do i
for (i = 0; i < 10; i++);
console.log(i);
