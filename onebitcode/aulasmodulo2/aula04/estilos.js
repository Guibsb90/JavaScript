function Light(){
    document.body.style.color = '#1C1C1C'
    document.body.style.backgroundColor = '#D3D3D3'
    
}

function Dark(){
    document.body.style.color = '#D3D3D3'
    document.body.style.backgroundColor = '#1C1C1C'
}

function Switch(){
   document.body.classList.toggle('is-light')
   document.body.classList.toggle('is-dark')
}


document.getElementById('dark').addEventListener('click', Dark)
document.getElementById('light').addEventListener('click', Light)
document.getElementById('Switch').addEventListener('click', Switch)