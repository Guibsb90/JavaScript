let input = document.querySelector('#input')
let resInput = document.querySelector('#result')
let allowedKeys = ["(",")","/","*","-", "+", "9", "8", "7", "6", "5", "4", ,"3", "2", "1", ".", "%"]
let audio = document.querySelector('#seuCreysson')

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        let value = charKeyBtn.dataset.value 
        input.value += value
    })
})

document.querySelector('#clear').addEventListener('click', function(){
    input.value = ''
    input.focus()
    resInput.value = ''
})


input.addEventListener('keydown', function(ev){
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
    
})

document.querySelector('#equal').addEventListener('click', calculate)

function calculate(){
    let result = eval(input.value)
    resInput.value = result
    audio.play()
}

    document.querySelector('#copyToClipboard').addEventListener('click', function(ev){
        let button = ev.currentTarget
        if(button.innerText === 'Copy'){
            button.innerText = 'Copied!'
            window.navigator.clipboard.writeText(resInput.value)
            alert('Copiado para área de transferência')
        }else {
            button.innerText = 'Copy'
        }
    }
)