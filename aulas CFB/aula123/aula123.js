// Aprendendo sobre FETCH para consumo de APIs #P2:
// -- para consumo criar variavel por boas práticas:

const p_temp = document.getElementById("p_temp");
const p_nivel = document.getElementById("p_nivel");
const p_press = document.getElementById("p_press");

const obterDados = () => {
  const endpoint = "https://pinchers.sergionasciment.repl.co/";

  let res = fetch(endpoint)
    .then((res) => res.json())
    .then((dados) => {
      console.log(dados);
      p_temp.innerHTML = "Temperatura " + dados.temperatura;
      p_nivel.innerHTML = "Nivel " + dados.nivel;
      p_press.innerHTML = "Pressão" + dados.pressao;
    });
};

let intervalo = setInterval(obterDados, 3000)

// -- conteudo feito no replit, para mostrar a saida de um numero random
/* var http = require("http");
http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-Type": "application/json" });
    let numero = {
      temperatura: Math.round(Math.random() * 10),
      nivel: Math.round(Math.random() * 10),
      pressao: Math.round(Math.random() * 10),
    };
    res.end(JSON.stringify(numero));
  })
  .listen(8080);
 */
