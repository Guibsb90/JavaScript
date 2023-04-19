let opçao = ""
do {
   opçao = prompt("Escolha uma das opções:\nOpção 1: 'a' \nOpção 2: 'b'\nOpção 3: 'c' \nOpção 4: 'd'\n Opção 5: 'e'\n")    
   if(opçao == "a"){
    alert("Você escolheu a opção 'A'")
   }
   if(opçao == "b"){
    alert("Você escolheu a opção 'B'")
   }
   if(opçao == "c"){
    alert("Você escolheu a opção 'C'")
   }
   if(opçao == "d"){
    alert("Você escolheu a opção 'D'")
   }
} while (opçao != "e")

alert("Programa encerrado")