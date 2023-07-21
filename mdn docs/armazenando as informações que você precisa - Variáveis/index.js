var button = document.querySelector('button');
const teste = document.querySelector('.teste')

button.onclick = function() {
  var nome = prompt('Qual é o seu nome?');
  alert('Olá ' + nome + ', é um prazer te ver!');
  teste.textContent = nome
}
