let imoveis = {}
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
           let nome = prompt("Qual o nome do imóvel?")

           imoveis[nome]= {}

           imoveis[nome]["Nome"] = prompt("Qual o nome do proprietário do imóvel?") 
           imoveis[nome]["Quarto"] = prompt("Quantos quartos tem o imóvel?")
           imoveis[nome]["Banheiro"] = prompt("Quantos banheiros possui o imóvel?")
           imoveis[nome]["Garagem"] = prompt("O imóvel possui garagem?")
           break
        case "2":
            let listaImoveis = "Aqui estão os imóveis cadastrados:\n";
            for (let imovel in imoveis) {
                listaImoveis += "\n" + imovel + ":";
                for (let propriedade in imoveis[imovel]) {
                    listaImoveis += "\n\t" + propriedade + ": " + imoveis[imovel][propriedade];
                }
            }
            alert(listaImoveis);
            break
        case "3":
            alert("Saindoo....")
            break
        default:
            alert("Opção invalida")
    }
} while (opçao != "3");