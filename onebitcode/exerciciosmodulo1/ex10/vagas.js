let vagaEmprego = []
console.log(vagaEmprego)
let opçao = ""

do {
    opçao = prompt("Vagas de Emprego\n\n"
        + "1) Listar vagas disponíveis\n"
        + "2) Criar nova vaga\n"
        + "3) Visualizar uma vaga\n"
        + "4) Inscrever um candidato em uma vaga\n"
        + "5) Excluir uma vaga\n"
        + "6) Sair")

    switch (opçao) {
        case "1":
            if (vagaEmprego.length === 0) {
                alert("Não temos vagas cadastradas")
            } else {
                vagaEmprego.forEach(function (objeto) {
                    alert("Índice: " + objeto.indice
                        + "\nNome: " + objeto.nome
                        + "\nQuandtidade de candidatos nessa vaga: " + objeto.ncandidatos)
                })

            }
            break

        case "2":
            let novaVaga = {}
            novaVaga.nome = prompt("Informe o nome para a vaga:")
            novaVaga.descriçao = prompt("Descreva a vaga:")
            novaVaga.dataLimite = prompt("Data limite pra o anuncio (dd/mm/aa):")
            novaVaga.indice = vagaEmprego.length
            novaVaga.indice++
            novaVaga.ncandidatos = 0
            novaVaga.candidatoNome = []
            let opçaovaga = confirm("Deseja Salvar?")
            switch (opçaovaga) {
                case true:
                    console.log(novaVaga.indice)
                    vagaEmprego.push(novaVaga)
                    break

                case false:
                    break
                
            }



            break

        case "3":
            let Visualizar = Number(prompt("Qual o número do índice da vaga que deseja vizualisar?"))
            let visualizar = vagaEmprego.find(function (vaga) {
                return vaga.indice === Visualizar
            })
            console.log(visualizar, Visualizar)
            if (visualizar === undefined) {
                alert("Vaga não encontrada")
            } else {
                alert("Índice: " + Visualizar +
                    "\n Nome da vaga: " + visualizar.nome +
                    "\nDescrição da vaga: " + visualizar.descriçao +
                    "\nData limite: " + visualizar.dataLimite +
                    "\nNumero de candidatos: " + visualizar.ncandidatos+
                    "\nNome dos candidatos: " + visualizar.candidatoNome)
            }
            break


        case "4":
            let indiceVaga = Number(prompt("Qual índice da vaga que você quer aplicar?"))
            if (isNaN(indiceVaga) || indiceVaga < 0 || indiceVaga > vagaEmprego.length) {
                alert("Índice inválido. Por favor, tente novamente.")
                break

            }

            let nomeCandidato = prompt("Qual seu nome?")

            let vaga = vagaEmprego[indiceVaga-1]

            let resumovaga = "\nNome da vaga: " + vaga.nome + "\n" +
            "Descrição da vaga: " + vaga.descriçao + "\n" +
            "Data limite: " + vaga.dataLimite + "\n" +
            "Numero de candidatos: " + vaga.ncandidatos + "\n" +
            "Nome dos candidatos: " + vaga.candidatoNome.join(", ") + "\n"
            
            alert("Informações da vaga: \n"+ resumovaga )
            
            let opçaonome = confirm("\nGostaria de salvar as alterações?")

            switch (opçaonome) {
                case true:
                    
                    console.log(indiceVaga)
                    vagaEmprego[indiceVaga -1].candidatoNome.push(nomeCandidato)
                    vagaEmprego[indiceVaga -1].ncandidatos += 1
                    alert("Nome inserido coms sucesso! ")
                    break
                case false:
                    break
                
            }


            break
        
        case "5":
            let indiceVaga2 = Number(prompt("Qual índice da vaga que você quer excluir?"))
            if (isNaN(indiceVaga2) || indiceVaga2 < 0 || indiceVaga2 > vagaEmprego.length) {
                alert("Índice inválido. Por favor, tente novamente.")
                break
            }
            let vaga2 = vagaEmprego[indiceVaga2-1]
            let resumovaga2 = "\nNome da vaga: " + vaga2.nome + "\n" +
            "Descrição da vaga: " + vaga2.descriçao + "\n" +
            "Data limite: " + vaga2.dataLimite + "\n" +
            "Numero de candidatos: " + vaga2.ncandidatos + "\n" +
            "Nome dos candidatos: " + vaga2.candidatoNome.join(", ") + "\n"

            alert("Informações da vaga: \n"+ resumovaga2 )
            
            let decisao = confirm("Quer prosseguir com e excluir a vaga?")
            switch(decisao){
                case true:
                    vagaEmprego.splice(indiceVaga2 -1, 1)
                    break
                case false:
                    break
                
            }
            
            break

        case "6":
            alert("Saindooo...")
            break

        default:
            alert("Ops, opção inválida!!")
            break
    }

} while (opçao !== "6");