const nometurista = prompt("Qual seu nome, turista?")
let cidades = ""
let contagem = 0

let continuar = prompt("Você visitou alguma cidade? (sim/não)")

while(continuar === "sim"){
    let cidade = prompt("Qual é o nome da cidade visitada?")
    cidades += " - " +cidade+ "\n"
    contagem ++
    continuar = prompt("Você visitou alguma outra cidade? (sim/não") 
}

alert( 
    "Turista "  + nometurista +
    "\nQuantidade de cidades visitadas:" +contagem+
    "\nCidades visitadas:\n"+cidades
)