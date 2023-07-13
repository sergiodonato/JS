// Aprendendo sobre FETCH para consumo de APIs #P1:
//

// -- para consumo criar variavel por boas práticas:
const endpoint = 'https://pinchers.sergionasciment.repl.co/'

let res = fetch(endpoint)
.then(res => res.json())
.then(dados => {
    console.log(dados)
})



// -- conteudo feito no replit, para mostrar a saida de um numero random
/* var http = require("http");
http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-Type": "application/json" });
    let numero = {
      valor: Math.round(Math.random() * 10),
    };
    res.end(JSON.stringify(numero));
  })
  .listen(8080);
 */