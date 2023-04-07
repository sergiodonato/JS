function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#7EAFCD'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#D2D4D1'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#101010'
    }
}

//tarde #D2D4D1
//noite #101010
//manha #7EAFCD