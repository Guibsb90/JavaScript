export function keys(ev){
  let input = document.querySelector('#input')

let allowedKeys = ["(",")","/","*","-", "+", "9", "8", "7", "6", "5", "4", ,"3", "2", "1", ".", "%"]
  ev.preventDefault()
         
      if(allowedKeys.includes(ev.key)){
          input.value += ev.key
          return 
      }
      if (ev.key === 'Backspace'){
          input.value = input.value.slice(0,-1)
      }
      if (ev.key === 'Enter'){
          calculate()
          
      }
  
}