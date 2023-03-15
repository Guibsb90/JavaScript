
function carregar() {
    var msg = window.document.getElementById('horas')
    var fot = window.document.getElementById('foto')
    var data = new Date()
    var hora = 10
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        imagem.src = 'manhap.png'
        document.body.style.background = '#DAA520'
    } else if (hora >= 12 && hora < 18){
        imagem.src = 'tardep.png'
        document.body.style.background = '#FF8C00'
    } else {
        imagem.src = 'noitep.png'
        document.body.style.background = '#9370DB'
    }
}
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] TENTE NOVAMENTE')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'midias/menino.png')
            } else if (idade < 21 ){
                
            } else if (idade < 50){
                img.setAttribute('src', 'midias/homem.png')
            } else {
                img.setAttribute('src', 'midias/velho.png')
            }
        }  else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'midias/menina.png')
            } else if (idade < 21 ){
               
            } else if (idade < 50){
                img.setAttribute('src', 'midias/mulher.png')
            } else {
                img.setAttribute('src', 'midias/velha.png')
            }   
        }  
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}