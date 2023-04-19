function calcular (a,b, operaçao){ /*essa "operaçao" é uma função. está sem o () porque o () é usado para chamar a função e mostrar seu resultado. para menciona-la, só escreva seu nome. */
    alert("Realizando uma operação.")
    let resultado = operaçao(a, b)
    return resultado
}

function somar(x, y){
    
    return alert(x + y)
}

calcular(3,5,somar)

calcular(4,2, function (x,y){
    return alert("Realizando uma subtração :" + ( x - y))
})

function exibirElemento(elemento, indice, array){
    alert( elemento, 
    indice, 
    array
)
}

let lista = ["maça", "banana", "laranja", "limao"]

lista.forEach(exibirElemento)