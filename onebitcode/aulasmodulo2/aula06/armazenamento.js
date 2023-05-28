document.getElementById('sessionBtn').addEventListener('click', function(){
    let session = document.querySelector('#session')
    sessionStorage.setItem('info',session.value)
    session.value = '' 
})

function Ler(){
    let info = sessionStorage.getItem('info')
    alert('O conteúdo salvo no SessionStorage é: '+ info)
}

document.getElementById('localBtn').addEventListener('click', function(){
    let info = document.querySelector('#local')
    localStorage.setItem('info', info.value)
    info.value = ''
})

document.getElementById('readLocal').addEventListener('click', function(){
    let info = localStorage.getItem('info')
    alert('O conteúdo salvo é: '+ info)
})

document.getElementById('cookieBtn').addEventListener('click', function(){
    let input = document.getElementById('cookie')
    let cookie = 'info=' + input.value + ';'
    let expir = 'expires=' + new Date(2023,6,1) + ';'
    let path = 'path=/;'
    document.cookie = cookie + expir + path
    input.value = ''
    console.log(document.cookie)
})
//cookieName=value; expires=UTCStringDate; path=/;
document.getElementById('cookie2Btn').addEventListener('click', function(){
    let input = document.getElementById('cookie2')
    let cookie = 'info=' + input.value + ';'
    let expir = 'expires=' + new Date(2023,6,1) + ';'
    let path = 'path=/;'
    document.cookie = cookie + expir + path
    input.value = ''
    console.log(document.cookie)
})