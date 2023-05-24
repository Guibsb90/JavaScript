let input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function(){
    console.log(input.value)
    console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', function(){
    input.type = input.type !== 'radio' ? 'radio' : 'text'
})

document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = 'Digite Algo'
})

document.getElementById('disable').addEventListener('click', function(){
    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function(){
    let data = input.dataset.something
    alert("o valor do atributo data-something é:"+ data)
})