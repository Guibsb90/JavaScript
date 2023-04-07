let valor = 0
let valor2 = "" 
let deposito = 0
let saque = 0
let sair = false

valor = Number(prompt("Qual o valor disponível?"))

do {
  valor2 =  prompt("Você possui "+valor+ " reais na sua conta, selecione a opção desejada: (depositar/sacar/sair)")

  if(valor2 == "depositar"){
    deposito = Number(prompt("Saldo disponível: " +valor+ "\nQual valor será depositado?"))
    alert("O valor total na conta é de "+(valor + deposito))
    valor += deposito
  } else if(valor2 == "sacar"){
    saque = Number(prompt("Saldo disponível "+valor+" Quanto gostaria de sacar?"))
    if(saque > valor){
      alert("Você não possui o valor total")
    } else {
      valor -= saque
      alert("O valor total na conta é de "+valor)
    }
  } else if(valor2 == "sair"){
    sair = true
  } else {
    alert("Opção inválida")
  }
} while (!sair);

alert("Você tem o total de "+valor+ " na sua conta.")
 
     
    