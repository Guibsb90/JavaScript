let medida = prompt("Qual a medida em metros?")
let medidanumero = Number(medida)

switch(medidanumero){
    case medidanumero:
        alert(` O número ${medidanumero} em milímetros é ${medidanumero * 1000} milímetros `)
    case medidanumero:
        alert(`O número ${medidanumero} em centímetros é ${medidanumero * 100} centímetros`)
    case medidanumero:
        alert(`O número ${medidanumero} em decímetros é ${medidanumero * 10} decímetros`)
    case medidanumero:
        alert(`O número ${medidanumero} em hectômetro é ${medidanumero / 100}hectômetros` )
    case medidanumero:
        alert(`O número ${medidanumero} em quilômetro é ${medidanumero / 1000} quilometris`)
}
res.innerHTML = (`O número ${medidanumero} em milímetros é ${medidanumero * 1000} milímetros<br>` +
`O número ${medidanumero} em centímetros é ${medidanumero * 100} centímetros<br>` +
`O número ${medidanumero} em decímetros é ${medidanumero * 10} decímetros<br>` +
`O número ${medidanumero} em hectômetros é ${medidanumero / 100} hectômetros<br>` +
`O número ${medidanumero} em quilômetros é ${medidanumero / 1000} quilômetros`);

/*res.innerHTML=(`O número ${medidanumero} em milímetros é ${medidanumero * 1000} milímetros`+
`\nO número ${medidanumero} em centímetros é ${medidanumero * 100} centímetros\n`+
`\nO número ${medidanumero} em decímetros é ${medidanumero * 10} decímetros\n`+
`\nO número ${medidanumero} em hectômetro é ${medidanumero / 100}hectômetros\n`+
`\nO número ${medidanumero} em quilômetro é ${medidanumero / 1000} quilometros\n`);*/

/*switch("uma expressão, valor fixo"){
    case "a": 
      alert("o resultado é 'a'")
      break
    case "b":
      alert("o resultado é 'b'")
      break
    case "c":
      alert("o resultado é 'c'")
      break
    defaut:
      alert("Finalizando...") */ 