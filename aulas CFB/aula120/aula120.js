// Aprendendo sobre validação nativa #P2:
//

const f_nome = document.querySelector("#f_nome");
const f_nota = document.querySelector("#f_nota");
const f_msg = document.querySelector("#f_msg");

// -- validação personalizada para o front1
/*
document.querySelector("#btn_validar").addEventListener("click", (evt) => {
  let estadoValidacao = f_nota.validity; // estado da validação

  if (estadoValidacao.valueMissing) {
    f_nota.setCustomValidity("Este campo é obrigatório, seu porrolho!");
  } else if (estadoValidacao.rangeOverflow) {
    f_nota.setCustomValidity("Nota mto alta!");
  }else if (estadoValidacao.rangeUnderflow) {
    f_nota.setCustomValidity("Nota lixiera!");
  }

  f_nota.reportValidity() // -- aqui mostra na box suspensa
  // f_msg.innerHTML = f_nota.validationMessage // -- aqui mostra no <p> abaixo
  evt.preventDefault(); // evita ativar botão
});
*/

// -- validação personalizada pra o front 2
document.querySelector("#btn_validar").addEventListener("click", (evt) => {
  let msg = null;

  if (f_nota.validity.valueMissing) {
    msg = "Este campo é obrigatório, seu porrolho!";
  } else if (f_nota.validity.rangeOverflow) {
    msg = "Nota mto alta!";
  } else if (f_nota.validity.rangeUnderflow) {
    msg = "Nota lixiera!";
  }

  //f_nota.reportValidity(); // -- aqui mostra na box suspensa
  f_msg.innerHTML = msg// -- aqui mostra no <p> abaixo
  evt.preventDefault(); // evita ativar botão
});

// -- Métodos de validação do DOM
// checkValidity()
// setCustomValidity()

// -- Propriedade de validação do DOM
// validity
// validationMessage

// -- Propriedades de validação
/*
customError: true, se uma msg de valid. personalizada for definida.
patternMismatch: true, se o valor de um ele. ñ corresponder ao seu atributo padrão
rangeOverflow: true, se o valor de um ele. for maior q seu atributo max
rangeUnderflow: true, se o valor de um ele. for menor q seu atributo min
stepMismatch: true, se o valor de um ele. for inválido por seu atributo step
tooLong: true, se o valor de um ele. exceder seu atributo maxLength
typeMismatch: true, se o valor de um ele. for inválido por seu atributo type
valueMissing: true, se um ele. (com um atributo obrigatório) ñ tiver valor
valid: true, se o valor de um ele. for válido
*/
