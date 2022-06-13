function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.ariaValueMax.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].Checked) {
            gênero = 'Homem'
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criancamasc.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmasc.png')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'adultomasc.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosomasc.png')
            }
        } else if
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}
