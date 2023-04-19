let num = window.prompt("Digite um número")
let outronum = window.prompt("Digite um número")

let Num = Number(num)
let Outronum = Number(outronum)
let soma = Num +  Outronum
let subt = num - outronum 
let mult = num * outronum
let divi = num / outronum   

alert(
    "Resultados:\n " + 
    "\n Soma: " +soma+ 
    "\nSubtração:"+subt+
    "\nMultiplicação:"+mult+
    "\nDivisão:"+divi
)