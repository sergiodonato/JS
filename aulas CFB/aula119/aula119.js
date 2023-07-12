// Aprendendo sobre validação nativa #P1:
//

const f_nome = document.querySelector("#f_nome");
const f_nota = document.querySelector("#f_nota");
const f_msg = document.querySelector("#f_msg");

document.querySelector("#btn_validar").addEventListener("click", (evt) => {
  let msg = null;

  if (!f_nota.checkValidity()) {
    msg = f_nota.validationMessage
  }

  f_msg.innerHTML = msg;
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
