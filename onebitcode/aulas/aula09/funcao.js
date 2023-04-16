function dobro (x){
    alert("o dobro de "+x+" é " + (x*2))
}

dobro(5) /* quando chamamos a função e damos um parametro a ela, esse parametro é usado na função 
            acima pra dar um resultado.*/

function dizerOla(nome = "mundo"){ // podemos atribuir um valor inicial para o parametro, que caso  
    alert("olá "+ nome+ ".") //a função seja chamada parametro, ela retorna o valor original
}
dizerOla("gui")
dizerOla()

function soma(a,b){
    alert("O resultado da soma é "+(a+b))
}
soma (1,300)

function criarUsuario(nome, email, senha, tipo = "admin"){
    let usuario = {
        nome: nome,
        email: email,
        senha: senha, 
        tipo: tipo
    }
    console.log(usuario)
}

criarUsuario("Gui", "gui@gmail.com", "1234")




function muitosParametros(nome, telefone, endereço, aniversario, email, senha){

}

muitosParametros("nome", "telefone", "endereço", "aniversario", "email", "senha")





function objetoComoParametro(usuario){
    usuario.nome
    usuario.email        // escopo interno ( fica dentro de uma função )
    usuario.telefone 
}

let dadosDoUsuario = {
    nome: "",
    telefone:"", 
    endereço:"",           //escopo externo (não fica dentro de uma função)
    aniversario: "", 
    email:"",
    senha:""
}

function calcularMedia(a, b){
    let media = (a+b)/2
    console.log(media)
}
calcularMedia(1,3)

