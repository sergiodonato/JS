const cursos = ["morder", "correr", "jumpar", "uivar"]

export {cursos, getCursos}

/* const getTodosCursos = () => {
    return cursos
} */


// para deixar escrito na função a que será exportada(uma por arquivo):
export default function getTodosCursos() {
    return cursos
}

function getCursos(i_curso) {
    return cursos[i_curso]
}