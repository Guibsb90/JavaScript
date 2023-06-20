export function copyToClipboard(ev){
  let resInput = document.querySelector('#result')
  let button = ev.currentTarget
  if(button.innerText === 'Copy'){
      button.innerText = 'Copied!'
      window.navigator.clipboard.writeText(resInput.value)
      alert('Copiado para área de transferência')
  }else {
      button.innerText = 'Copy'
  }
}
export function calculate(){
  let audio = document.querySelector('#seuCreysson')
  let resInput = document.querySelector('#result')
  let result = eval(input.value)
  resInput.value = result
  audio.play()
}
