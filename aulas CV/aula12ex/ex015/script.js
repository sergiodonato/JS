function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Coloque os dados direitos, PESTE!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Omi'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/m-1.png')
            } else if (idade < 40) {
                img.setAttribute('src', 'imagens/m-2.png')
            } else if (idade >= 40) {
                img.setAttribute('src', 'imagens/m-3.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Muié'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/f-1.png')
            } else if (idade < 40) {
                img.setAttribute('src', 'imagens/f-2.png')
            } else if (idade >= 40) {
                img.setAttribute('src', 'imagens/f-3.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Avistado ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

