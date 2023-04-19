let imoveis = []
let opçao = ""
do {
        opçao = prompt(
        "Temos um total de "+ Object.keys(imoveis).length +" imóveis cadastrados.\n"
        +"\nO que deseja?"
        +"\n1 - Salvar um novo imóvel"
        +"\n2 - Mostrar imóveis salvos"
        +"\n3 - Sair"
        )
    switch(opçao){
        case "1":
            let imovel = {}
            imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
            imovel.quartos = prompt("Quantos quartos possui o imóvel?")
            imovel.banheiros = prompt("Quantos banheiros possui o imóvel?")
            imovel.garagem = prompt("O imóvel possui garagem? (sim/não)")

            let confirmaçao = confirm(
                "Você quer salvar esse imóvel?\n"+
                "\nProprietário: " + imovel.proprietario+
                "\nQuartos:" + imovel.quartos+
                "\nBanheiros:" + imovel.banheiros+
                "\nPossui garagem? " + imovel.garagem
            )
            if (confirmaçao){
                imoveis.push(imovel)
            }         
           break
        case "2":
            for ( let i = 0 ; i < imoveis.length  ; i++ ){
                alert(
                    "Imóvel " + (i+1)+
                    "\nProprietário:" + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos+
                    "\nBanheiros: " + imoveis[i].banheiros+
                    "\nPossui garagem? " + imoveis[i].garagem

                )   
            }           
    
            break
        case "3":
            alert("Saindoo....")
            break
        default:
            alert("Opção invalida")
    }
} while (opçao != "3");