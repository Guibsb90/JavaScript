let espera = [""];
let mensagem = "";
let sair = false;
let opcao = "";

for (let i = 0; i < espera.length; i++) {
    opcao = prompt(mensagem = "Paciente "+":" +espera.join("\nPaciente :") +"\nGostaria de : Adicionar novo paciente?(adicionar) \nConsultar paciente?(consultar) \nSair(sair)")
    if(opcao == "consultar"){
        espera.shift()
        alert(espera[0]+"Foi consultado(a)")
    }if(opcao == "" || opcao == Number){
    alert("opção inválida")
  } if (opcao === "adicionar") {
    espera.push(prompt("Qual o nome do paciente?"));
  } else if (opcao ==='sair') {
    alert("Você está saindo.");
    sair = true;
    break; 
  }
}

mensagem = espera.join("\n");
alert(mensagem);

