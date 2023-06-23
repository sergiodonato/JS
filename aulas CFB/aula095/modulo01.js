// ---- criado como static, para ter o mesmo endereço de memória, e a classe ñ precisar ser instanciada: ----
class Cursos {
    static cursos = ["morder", "correr", "jumpar", "uivar", "caçinha raiz"]

    // --- pode ter um construtor dentro: ---
    constructor(){}

    static getTodosCursos = () => {
        return this.cursos
    }

    static getCursos = (i_curso) => {
        return this.cursos[i_curso]
    }

    static addCurso = (novoCurso) => {
        this.cursos.push(novoCurso)
    }

    static apagarCursos = () => {
        this.cursos = []
    }
}


export default Cursos