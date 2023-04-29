let timefutebol = []

function addjogador(){
    let novojogador = {}
    novojogador.nome = document.querySelector('#nomejogador').value
    novojogador.posiçao = document.querySelector('#posiçaojogador').value
    novojogador.camisa = Number(document.querySelector('#camisajogador').value)
  
    let lista = document.getElementById('listatime')
  
    let nomelista = document.createElement('li')
  
    nomelista.id = 'player- '+ novojogador.camisa 
    nomelista.innerText = novojogador.nome + " de camisa número "+novojogador.camisa +" foi adicionado ao time"
    lista.appendChild(nomelista)
  
    timefutebol.push(novojogador)
  
    document.querySelector('#nomejogador').value = ""
    document.querySelector('#posiçaojogador').value = ""
    document.querySelector('#camisajogador').value = ""
    console.log(novojogador)
  }
function excluir(){
    let excluirjogador = document.querySelector('#excluir')
    let excluirjogador2 = Number(excluirjogador.value)
    
    let indicejogador = timefutebol.findIndex(jogador => jogador.camisa === excluirjogador2)
  
    if (indicejogador === -1) {
      alert("Jogador não encontrado!")
      return
    }
  
    let nomeJogadorExcluido = timefutebol[indicejogador].nome
    
    if (confirm("Deseja excluir o jogador "+ nomeJogadorExcluido + "?" )) {
      let jogadorexcluido = document.getElementById('player- '+ excluirjogador2)
      console.log(jogadorexcluido)
      document.getElementById('listatime').removeChild(jogadorexcluido)
      timefutebol.splice(indicejogador, 1)
      document.querySelector('#excluir').value = ""
      
    }
  
   
  }
