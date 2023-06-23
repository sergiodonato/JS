// Aprendendo trabalhar com módulos #P4:
// trabalhando com classes:

// --- por usar export default, não precisa usar nome horiginal: ---
import c from "./modulo01.js";


c.addCurso("cambalhotas")
console.log(c.getTodosCursos())
c.apagarCursos()
console.log(c.getTodosCursos())
