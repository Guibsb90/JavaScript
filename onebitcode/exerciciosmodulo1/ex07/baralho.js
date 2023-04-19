let baralho = []
let opçao = ""

do {
        opçao = prompt(
            "Cartas no baralho:" + baralho.length
            +"\nOpções:\n1- Adicionar uma carta\n 2- Puxar uma carta \n 3- Sair"
            )
    switch (opçao){
        case "1":
        let novaCarta = prompt("Qual carta está adicionando?")
        baralho.push(novaCarta)
        break
        case "2": 
        let cartaRetirada = baralho.pop()
        if(cartaRetirada){
            alert(cartaRetirada +" Foi retirada do baralho")
        }else{
            alert("Sem cartas")
        }
        
        break
        case "3":
        alert("Fechando...")
        break
        default:
        alert("Opção inválida")
        
    }
        
} while (opçao !== "3");