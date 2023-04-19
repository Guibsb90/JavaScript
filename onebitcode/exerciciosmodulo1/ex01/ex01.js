let nome = document.querySelector("#nome")
let sobrenome = document.querySelector("#sobrenome")
let campoDeEstudo = document.querySelector("#estudo")
let nascimento = document.querySelector("#nascimento")
let resposta = document.querySelector("#resposta")

function Nome(){
    if(nome.value.length == 0){
        window.alert('Escreva um Nome válido')
    }else{
        let nome = document.querySelector("#nome")
    }    
}
function Sobrenome(){
    if(sobrenome.value.length == 0){
        window.alert('Escreva um Sobrenome válido')
    }else{
        let sobrenome = document.querySelector("#sobrenome")
    }    
   
}
function Estudo(){
    if(campoDeEstudo.value.length == 0){
        window.alert('Escreva um campo de estudos válido')
    }else{
        let campoDeEstudo = document.querySelector("#estudo")
}
    }    
    
function Nasci(){
    if(nascimento.value.length == 0){
        window.alert('Escreva uma data de nascimento válida')
    }else{
        let nascimento = document.querySelector("#nascimento")
    }    
    
}
function Confirmar(){
    let nomecompleto = nome.value + ' ' + sobrenome.value
    let idade = ( 2023 - nascimento.value)
    resposta.innerHTML = `Seu nome é ${nomecompleto}
    Seu campo de estudos é ${campoDeEstudo.value} 
    Sua idade é ${idade}`
    
}