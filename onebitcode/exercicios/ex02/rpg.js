const atacante = prompt('Qual o nome do atacante?')
const poderDeAtaque = prompt('Qual poder de ataque?')

const defensor = prompt('Qual o nome do defensor?')
let vida = prompt('Quantos pontos de vida tem o defensor?')
const defesa = prompt('Quanto de defesa tem o defensor?')
const possuiEscudo = prompt('Possui escudo? (Sim/Não)')

let danoCausado = 0

if(poderDeAtaque > defesa && possuiEscudo === "Não"){
    danoCausado = poderDeAtaque - defesa
} else if (poderDeAtaque > defesa && possuiEscudo === "Sim"){
    danoCausado = (poderDeAtaque - defesa) / 2
}

vida -= danoCausado

alert(atacante + "causou" + danoCausado + "pontos de dano em" + defensor)
alert(
    atacante + "\nPoder de ataque:" + poderDeAtaque +"\n\n" +
    defensor + "\nPontos de Vida:" + vida+
    "\nPoder de Defesa:" + defesa + "\nPossui escudo:" +possuiEscudo
)





/*
function Nome(){
    let nome01 = document.querySelector("#nome1")

    if(nome01.value.length == 0 || nome01.value == Number(nome01.value)){
        alert("Insira um nome válido")
    }
}

function Nome2(){
    let nome2 = document.querySelector("#nome2")

    if(nome2.value.length == 0 || nome2.value == Number(nome2.value)){
        alert("Insira um nome válido")
    }
}

function Ata(){
    let ata1 = document.querySelector("#ata")

    if(ata1.value.length == 0){
        alert("Insira um valor válido")
    }
}


function Ata2(){
    let ata2 = document.querySelector("#ata2")

    if(ata2.value.length == 0){
        alert("Insira um valor válido")
    }
}

function Vida(){
    let vida = document.querySelector("#vida")

    if(vida.value.length == 0){
        alert("Insira um valor válido")
    }
}

function Vida2(){
    let vida2 = document.querySelector("#vida2")

    if(vida2.value.length == 0){
        alert("Insira um valor válido")
    }
}


function Def(){
    let def = document.querySelector("#def")
    
}

function Def2(){
    let def2 = document.querySelector("#def2")
    
}

function Escudo(){
    let escudo = document.querySelector("#escudo")
}


function Escudo2(){
    let escudo = document.querySelector("#escudo2")
}

let escudo2 = document.querySelector("#escudo2")
let escudo = document.querySelector("#escudo")
let def2 = document.querySelector("#def2")
let def = document.querySelector("#def")
let vida2 = document.querySelector("#vida2")
let vida = document.querySelector("#vida")
let ata2 = document.querySelector("#ata2")
let ata = document.querySelector("#ata")
let nome2 = document.querySelector("#nome2")
let nome01 = document.querySelector("#nome1")
*/
