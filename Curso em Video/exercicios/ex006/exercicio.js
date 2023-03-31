function contador(){
var inicio = window.document.getElementById('inicio')
var fim = window.document.getElementById('fim')
var passo = window.document.getElementById('passo')
var res = document.getElementById('res')

if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
    window.alert('[ERRO] Faltam dados!')
} else{
    res.innerHTML = 'Contando:'
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if(i<f){
        for(var c = i; c<=f; c+=p){
            res.innerHTML += `${c} ,`  
        }
    }else{
        for(var c=i; c>=f; c-=p){
            res.innerHTML += `${c} ,`
        }
    }
  } 
}

function tabuada(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um número.')        
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //este comando limpa a tabuada anterior
        while (c<=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value= `tab${c}`
            tab.appendChild(item) // esse comando cria um item no html
            c++
        }       
    }

    
}