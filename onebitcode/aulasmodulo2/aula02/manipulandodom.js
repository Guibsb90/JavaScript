function addcontato(){
    let listacontatos = document.getElementById('listacontatos')

    let h3 = document.createElement('h3')
    h3.innerText = "Contato"

    let ul = document.createElement('ul')

    let nomeli = document.createElement('li')
    nomeli.innerText = "Nome :"    
    let inputnome = document.createElement('input')
    inputnome.type = 'text'
    inputnome.name = 'nomecompleto'
    nomeli.appendChild(inputnome)
    ul.appendChild(nomeli)
    ul.appendChild(document.createElement('br'))

    let foneli = document.createElement('li')
    foneli.innerText = "Telefone :"
    let inputnumero = document.createElement('input')
    inputnumero.type = 'text'
    inputnumero.name = 'telefone'
    foneli.appendChild(inputnumero)
    ul.appendChild(foneli)
    ul.appendChild(document.createElement('br'))
    
    let endereçoli = document.createElement('li')
    endereçoli.innerHTML = '<label for ="endereço">Endereço: </label>'
    let endereçoInput = document.createElement('input')
    endereçoInput.type = 'text'
    endereçoInput.name = 'endereço'
    endereçoInput.id = 'endereço'
    endereçoli.appendChild(endereçoInput)
    ul.appendChild(endereçoli)
    ul.appendChild(document.createElement('br'))

    listacontatos.append(h3,ul)

    

    
}

function removercontato(){
    let selecionecontat = document.getElementById('listacontatos')

    let titulos = document.getElementsByTagName('h3')
    let contatos = document.getElementsByTagName('ul')
    
    selecionecontat.removeChild(titulos[titulos.length -1])
    selecionecontat.removeChild(contatos[contatos.length -1])
}