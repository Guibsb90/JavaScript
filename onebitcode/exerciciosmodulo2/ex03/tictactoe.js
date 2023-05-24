let gameBoard = document.querySelectorAll('#gameBoard span')
let vBoard = []
let turnPlayer = ''


function updateTitle(){
    let playerInput = document.getElementById(turnPlayer)
    document.getElementById('turnPlayer').innerText = playerInput.value
}

function startGame(){
    vBoard = [['', '', ''],['', '', ''],['', '', '']];
    turnPlayer = 'player1'
    document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>'
    updateTitle()
    gameBoard.forEach(function (element){
        element.classList.remove('win')
        element.addEventListener('click', handleBoardClick)
    })
}
function disablePosition(element){
    element.style.cursor = 'default'
    element.removeEventListener('click', handleBoardClick)
}

function getWinPositions(){
    let winRegions = []
    if(vBoard[0][0] && vBoard[0][0]===vBoard[0][1]&& vBoard[0][0]===vBoard[0][2])
        winRegions.push("0.0","0.1","0.2")
    if(vBoard[1][0] && vBoard[1][0]===vBoard[1][1]&& vBoard[1][0]===vBoard[1][2])
        winRegions.push("1.0","1.1","1.2")
    if(vBoard[2][0] && vBoard[2][0]===vBoard[2][1]&& vBoard[2][0]===vBoard[2][2])
        winRegions.push("2.0","2.1","2.2")
    if(vBoard[0][0] && vBoard[0][0]===vBoard[1][0]&& vBoard[0][0]===vBoard[2][0])
        winRegions.push("0.0","1.0","2.0")
    if(vBoard[0][1] && vBoard[0][1]===vBoard[1][1]&& vBoard[0][1]===vBoard[2][1])
        winRegions.push("0.1","1.1","2.1")
    if(vBoard[0][2] && vBoard[0][2]===vBoard[1][2]&& vBoard[0][2]===vBoard[2][2])
        winRegions.push("0.2","1.2","2.2")
    if(vBoard[0][0] && vBoard[0][0]===vBoard[1][1]&& vBoard[0][0]===vBoard[2][2])
        winRegions.push("0.0","1.1","2.2")
    if(vBoard[0][2] && vBoard[0][2]===vBoard[1][1]&& vBoard[0][2]===vBoard[2][0])
        winRegions.push("0.2","1.1","2.0")

    return winRegions

   
}

function handleWin(positions){
    positions.forEach(function(position){
        document.querySelector('[data-position = "' +position+ '"]').classList.add('win')
        let player = document.getElementById(turnPlayer).value
        document.querySelector('h2').innerHTML = player + ' venceu!'
    })
}
function handleBoardClick(ev){
    let span = ev.currentTarget
    let position = span.dataset.position
    let rowColumnPair = position.split('.')
    let row = rowColumnPair[0]
    let column = rowColumnPair[1]
    if (turnPlayer === 'player1'){
        span.innerText = 'X'
        vBoard[row][column] = 'X'
    } else {
        span.innerText = 'O'
        vBoard[row][column] = 'O'
    }
    console.clear()
    console.table(vBoard)
    disablePosition(span)
    let winPositions = getWinPositions()
    if (winPositions.length > 0 ) {
        handleWin(winPositions)
    } else if(vBoard.flat().includes('')){
        turnPlayer = turnPlayer==='player1' ? 'player2' : 'player1'
        updateTitle()
    }else{
        document.querySelector('h2').innerHTML = 'EMPATE!'
    }
}


document.getElementById('jogar').addEventListener('click', startGame)