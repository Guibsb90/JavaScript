let num = document.querySelector('input#numero')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let Numeros = []

function isNumero(n){
    if(Number(n)>=1 && Number(n) <=100){
        return true
    } else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n))!= -1){
        return true
    } else {
        return false
    }

}


function add(){
    if(isNumero(num.value) && !inLista(num.value, Numeros)){
        Numeros.push(Number(num.value, Numeros))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML =''
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value =''  // num. se refere a variável num, linha 1. e .value seria o valor. como está preenchido com nada '', após a função ser executada, ela executa esse comando e limpa a caixa de texto.
    num.focus() //  o .focus serve para voltar o cursor piscando em cima da caixa de texto num
}
 
function finalizar(){
    if(Numeros.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = Numeros.length // cria uma variavel tot que mostra o total de numeros que tem no array Numeros
        let maior = Numeros[0] //cria uma variável maior que puxa o primeiro número do array
        let menor = Numeros[0]
        let soma = 0
        let media = 0
        for(let pos in Numeros){
            soma += Numeros[pos]
            if(Numeros[pos]> maior)
            maior = Numeros[pos]
            if (Numeros[pos]< menor)
            menor = Numeros[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> ${maior} foi o maior número.</p>`
        res.innerHTML += `<p> ${menor} foi o menor número.</p>`
        res.innerHTML += `<p> ${soma} foi a soma de todos os números.</p>`
        res.innerHTML += `<p> ${media} é a média de todos os números.</p>`
    }
   
}