// código do professor

let fila = []
let opçao = ""

do{
    let pacientes = ""
    for (let i = 0; i<fila.length; i++){
        pacientes += (i+1) + "º -" + fila[i] + "\n"
    }
    opçao = prompt(
        "Pacientes:\n" + pacientes+
        "\nEscolha uma opção:\n1. Novo paciente\n2. Consultar\n3. Sair"
    )
    switch (opçao){
        case "1":
            let novoPaciente = prompt("Qual é o nome do paciente?")
            fila.push(novoPaciente)
            break
        case "2": 
            let pacienteConsultado = fila.shift()
            if(pacienteConsultado){ //o JS tenta transformar a variável em string. Quando o valor é null ou undefined, ele como falso.
               alert(pacienteConsultado + " foi consultado") 
            }else{
                alert("Não há pacientes na fila!")
            }            
            break
        case "3":
            alert("Encerrando")
            break
        default:
            alert("opção inválida")
    }
}while(opçao !=="3")