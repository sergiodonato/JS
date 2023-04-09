function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados')        
    } else {
        res.innerHTML = 'Contando:<br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Sem passo, vai de 1 em 1, peste!')
            p = 1
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                if (c % 2 == 0) {
                    res.innerHTML += `${c} \u{1F56F}, `
                } else {
                    res.innerHTML += `${c} \u{1F415}, `
                }                
            }
        
        } else {
            for (let c = i; c >= f; c -= p) {
                if (c % 2 == 0) {
                    res.innerHTML += `${c} \u{1F415}, `
                } else {
                    res.innerHTML += `${c} \u{1F56F}, `
                } 
            }            
        }
        res.innerHTML += `\u{1F9B4}!`
    }
}

//U+1F415 dog