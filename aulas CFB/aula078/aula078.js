// Criando um Relógio - Data e Hora #P2:

const div_relogio = document.getElementById("div_relogio")
const data = new Date()

const relogio = () => {
    const data = new Date()
    let hora = data.getHours()
    hora = hora < 10 ? "0" + hora : hora

    let minuto = data.getMinutes()
    minuto = minuto < 10 ? "0" + minuto : minuto

    let segundo = data.getSeconds()
    segundo = segundo < 10 ? "0" + segundo : segundo

    const hora_completa = hora + ":" + minuto + ":" + segundo
    div_relogio.innerHTML = hora_completa
}

const intervalo = setInterval(relogio, 1000)

/* const div_data = document.getElementById("div_data")
const data = new Date()

let dia = data.getDate()
dia = dia < 10 ? "0" + dia : dia

let mes = data.getMonth()
mes = mes < 10 ? "0" + mes : mes

const data_r = dia + "/ " + mes + "/ " + data.getFullYear()

div_data.innerHTML = data_r */





// formas iniciais de chamar data
// console.log(data)
// console.log(new Date)
// console.log(Date.now()) // timestamp 1/1/1970 utf 0

/* console.log(data)
console.log(`Dia do mês: ${data.getDate()}`) */

/*
getDate() = dia do mês
getDay() = dia da semana (número)
getFullYear() = ano com 4 dígitos
getHours() = horas
getMilliseconds() = milissegundos
getMinutes() = minutos
getMounth() = mês
getSeconds() = segundos
getTime() = timestamp
Date.now() = timestamp
getTimezoneOffset() = timezone da localidade
setDate() = define um dia do mes para a data 
setMonth() = define um mês para a data
setFullYear() = define um ano para a data
setHours() = define horas
setMinutes() = define minutos
setSeconds() = define segundos
setMilliseconds() = define milessegundos
toDateString() = retorna somente a data
*/