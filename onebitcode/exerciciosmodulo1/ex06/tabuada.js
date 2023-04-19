const numero = prompt(
   "Olá, eu sou o Robô Inês Brasil da Tabuada!\n"+
   "Informe o número que vocẽ deseja calcular a tabuada do amor:" 
)
let resultado = ""

for (let fator = 1; fator <= 10; fator ++){
    resultado += " Raaawr rugido da pantera-> " +numero+ " * " +fator+ "=" +(numero*fator) + "\n"
}
alert("Resultado da tabuada de "+numero+ ":\n\n" + resultado)