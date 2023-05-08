function createLabel(text, htmlFor){
    let label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
} 
function createInput(id, value, name, type='text', placeholder=''){
    let input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

let addTechBtn = document.querySelector('.addTech')
let form = document.querySelector('.formulario')
let dev = []
let inputRows = 0

addTechBtn.addEventListener('click', function(ev){
   let stackInputs = document.querySelector('.stackInputs')
  
   let newRow = document.createElement('li')
   let rowIndex = inputRows
   inputRows++
   newRow.id = 'inputRow-' + rowIndex 
   newRow.className= 'inputRow'
   
   let techNameLabel = createLabel('Nome: ', 'techName-'+rowIndex)
   let TechNameInput = createInput('techName-' + rowIndex, null, 'techName')
   

   let expLabel = createLabel(' Experiência: ')
   let id1 = 'expRadio-' + rowIndex + '.1'
   let expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
   let expLabel1 = createLabel( '0-2 anos', id1)
   
   let id2 = 'expRadio-' + rowIndex + '.2'
   let expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')
   let expLabel2 = createLabel( '3-4 anos', id2)
   
   let id3 = 'expRadio-' + rowIndex + '.3'
   let expRadio3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio')
   let expLabel3 = createLabel( '5+ anos', id3)

   let removeRowBtn = document.createElement('button')
   removeRowBtn.type = 'button'
   removeRowBtn.innerText = 'Remover'
   removeRowBtn.addEventListener('click',function(){
    stackInputs.removeChild(newRow) 
   })

   newRow.append(
    techNameLabel, TechNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3 , removeRowBtn
   )
   stackInputs.appendChild(newRow)

   form.addEventListener('submit', function(ev){
    ev.preventDefault()

    let fullNameInput = document.querySelector('#nome')
    let inputRows = document.querySelectorAll('.inputRow')

    let technologies = []
    inputRows.forEach(function(row){
        let techName = document.querySelector('#'+ row.id + ' input[name="techName"]').value
        let techExp = document.querySelector('#'+ row.id + ' input[type="radio"]:checked').value
        technologies.push({name: techName, exp: techExp })
        
    })
    let newDev = { fullname: fullNameInput.value, technologies: technologies}
    dev.push(newDev)
    alert('Dev cadastrado com sucesso!')

    fullNameInput.value = ''
    inputRows.forEach(function(row){
        row.remove()
        
    })
    
    console.log(dev)
} )

})


