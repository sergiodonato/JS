// Aprendendo trabalhar com módulos #P3:
// importações / exportações nomeadas;

// ---- import do defaut: ----
// import getTodosCursos from "./modulo01.js";
// console.log(getTodosCursos()) 

// ---- usando alias: ----
// import { cursos as c, getCursos as gc } from "./modulo01.js";
// console.log(c)
// console.log(gc(2))

// ---- usando importe all = " * ": ----
import * as m_cursos from "./modulo01.js"

console.log(m_cursos.cursos)
console.log(m_cursos.getCursos(4))
console.log(m_cursos.default())