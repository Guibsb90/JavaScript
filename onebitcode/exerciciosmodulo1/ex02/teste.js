
let nome = document.querySelector("#nome")
let nome2 = document.querySelector("#nome2")
let vel = document.querySelector("#vel")
let vel2 = document.querySelector("#vel2")

function Nome(){
    if(nome.value.length == 0){
        alert("Insira um nome válido")
    }
}
function Nome2(){
    if(nome2.value.length == 0){
        alert("Insira um nome válido")
    }
}
function Vel(){
    if(vel.value.length <= 0 || isNaN(Number(vel.value))){
        alert("Insira um valor válido")
    }
}
function Vel2(){
    if(vel2.value.length <= 0 || isNaN(Number(vel2.value))){
        alert("Insira um valor válido")
    }
}

function Resultado(){
    
    let velocidade = Number(vel.value)
    let velocidade2 = Number(vel2.value)

    if(velocidade > velocidade2){
    res.innerHTML = (`O ${nome.value} é o mais rapido.`)
    }if(velocidade == velocidade2){
    res.innerHTML = ("Empate")}else{
    res.innerHTML = (`O ${nome2.value} é o mais rapido.`)
    }
    
}
