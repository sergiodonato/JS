// WebStorage, localStorage e SessionStorage:
//local persiste, session perde ao fechar browser

const f_texto = document.querySelector("#f_texto");
const p_texto = document.querySelector("#p_texto");
const btn_texto = document.querySelector("#btn_texto");

btn_texto.addEventListener("click", (evt) => {});

let num = 10;
const curso = 'javapinchers'
// -- por ser da tela, o windom. antes é opcional:
//window.localStorage.setItem("numero", num);
localStorage.setItem("numero", num);
localStorage.setItem("numero", 33);
localStorage.setItem("nome", 'kctada');
localStorage.setItem("curso", curso);

//alert(localStorage.length) //mostra tamanho do local
//alert(localStorage.key(0))
// -- as chaves ficam armazenadas, para limpar
localStorage.clear()
// -- mostra valor
//localStorage.getItem('numero')

// -- session storage, funciona igual ao localstorage, ao fechar brouser se perde os dados.
sessionStorage.setItem("numero", 33);
sessionStorage.setItem("nome", 'kctada');
sessionStorage.setItem("curso", curso);