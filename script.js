function verificar(){
    var m1 = document.getElementById('media1')
    var m2 = document.getElementById('media2')
    var res = window.document.getElementById('res')
    var n1 = Number(m1.value)
    var n2 = Number(m2.value)
    if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10) {
    window.alert(`[ERRO] verifique os dados e tente novamente!`)
    }else{
        var s = (n1 + n2) / 2 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (s < 4){
            //nazare
            img.setAttribute('src', 'nazare 0.png')
        }else if (s < 7){
            //opinar
            img.setAttribute('src', 'opinar 5.png')
        }else if (s < 10){
            //ines
            img.setAttribute('src', 'ines 7.png')
        }else{
            //richarlison
            img.setAttribute('src', 'richarlison 10.png')
        }
        med.style.textAlign = 'center'
        med.innerHTML = `Sua média escolar é ${s}!`
        res.innerHTML = ''
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}
