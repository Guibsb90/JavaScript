function areaTriangulo(triangulo){
    let resultado = (triangulo.base * triangulo.altura) / 2 
    alert("A área do triângulo é: " + resultado)
}

function areaRetangulo(retangulo){
    let resultado = (retangulo.base * retangulo.altura)
    alert("A área do retângulo é: " + resultado)
}

function areaQuadrado(quadrado){
    let resultado = quadrado.lado**2
    alert("A área do quadrado é: " + resultado)
}

function areaTrapezio(trapezio){
    let resultado = (trapezio.baseMaior + trapezio.baseMenor)*trapezio.altura/2
    alert("A área do trapézio é: " + resultado)
}

function areaCirculo(circulo){
    let resultado = 3.14*(circulo.raio)**2
    alert("A área do círculo é: " + resultado)
}
let opçao = ""

do {
    opçao = prompt("Bem vindo à Calculadora Geométrica.\nAqui você consegue fazer os seguintes calculos:\n\n1) Área do triângulo\n2) Área do retângulo\n3) Área do quadrado\n4) Área do trapézio\n5) Área do círculo\n 6) Sair...")
    switch(opçao){
        case "1":
            let triangulo = {base: prompt("Qual o valor da base do triangulo?"), altura: prompt("Qual o valor da altura do triângulo?")}
            areaTriangulo(triangulo)            
            break
        case "2":
            let retangulo = {base: prompt("Qual o valor da base do retângulo?"), altura: prompt("Qual o valor da altura do retângulo?")}
            areaRetangulo(retangulo)
            break
        case "3":
            let quadrado = {lado: prompt("Qual o valor do lado do quadrado?")}
            areaQuadrado(quadrado)
            break
        case "4":
            let trapezio = {baseMaior: prompt("Qual o valor da base maior do trapézio?"), baseMenor: prompt("Qual valor da base menor do trapézio?"), altura: prompt("Qual valor da altura do trapézio?") }
            areaTrapezio(trapezio)
            break
        case "5":
            let circulo = {raio: prompt("Qual o valor do raio do círculo?")}
            areaCirculo(circulo)
            break  
        case "6":
            alert("Saindoo...")
            break  
        default:
            alert("Opção inválida")
    }
} while (opçao != "6");