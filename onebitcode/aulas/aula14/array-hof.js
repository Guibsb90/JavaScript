let konoha = [
    {numero: 1, nivel: "Jonin", nome: "Kakashi", natureza:"Raio", aldeia:"Folha"},
    {numero: 4,nivel: "Genin", nome: "Gaara", natureza:"Terra", aldeia:"Areia"},
    {numero: 3, nivel: "Kage", nome: "Hashirama", natureza:"Terra", aldeia: "Folha"},
    {numero: 2, nivel: "Chunin", nome: "Shikamaru", natureza: "Desconhecida", aldeia: "Folha"}

]
//medodo map: consegue criar um novo array baseado nele. não modifica o array já existente
console.log(konoha)
let nomeS = []

for(let i=0; i < konoha.length; i++){
    nomeS.push(konoha[i].nome)
}
console.log(nomeS)

// as duas opções fazem a mesma coisa, porém, a função MAP é uma array H.O.F e deixa o código mais limpo 

let nomes = konoha.map(function(konoha){
    return konoha.nome
})

console.log(nomes)

// ___________________________________________________________________________________________________
//Filter -> filtra elementos dentro de um array

let Terra = []

for (let i = 0; i < konoha.length; i++) {
   if (konoha[i].natureza === "Terra"){
    Terra.push(konoha[i])
   }    
}

console.log(Terra)

let terra = konoha.filter(function(konoha){
    return konoha.natureza === "Terra"
})

console.log(terra)

//____________________________________________________________________________________________________

//reduce => além de números, podemos trabalhar com strings, valores booleanos, etc. 

let numbers = ["tenho", " muita", " curiosidade"]

let sum = numbers.reduce((acumulador, item)=> acumulador + item,"") //esse => é o return da função anonima

console.log(sum)

let Aldeia = konoha.reduce(function (acumulado, qualaldeia){
    if(acumulado[qualaldeia.aldeia]){
        acumulado[qualaldeia.aldeia].push(qualaldeia)
    }else{
        acumulado[qualaldeia.aldeia] = [qualaldeia]
    }
    return acumulado
},{})

console.log(Aldeia)

//___________________________________________________________________________________________________
//sort -> ordenar as coisas. Altera o array original. Ele faz uma comparação em pares para ordenar o array.  ex: 1,2,3,4 (o sort pega os numeros, em pares, e ve qual é o maior q o outro e bota em ordem. )


// para usar o sort sem mudar o array original, podemos usar o slice

let KonohaNova = konoha.slice().sort(function(a,b){
    return a.numero - b.numero
})

console.log(KonohaNova)
console.log(konoha)

//konoha.sort(function(a,b){
    //return a.numero - b.numero // se o primeiro elemento for maior que o segundo, ele  bota o maior pro fim. o js faz a conta, e se der positivo ele manda pra frente e negativo ele deixa pra trás
//})

// console.log(konoha)

