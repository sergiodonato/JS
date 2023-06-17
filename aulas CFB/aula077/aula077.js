// Aprendendo sobre Data e Hora :

const div_data = document.getElementById("div_data")
const data = new Date()

let dia = data.getDate()
dia = dia < 10 ? "0" + dia : dia

let mes = data.getMonth()
mes = mes < 10 ? "0" + mes : mes

const data_r = dia + "/ " + mes + "/ " + data.getFullYear()

div_data.innerHTML = data_r





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