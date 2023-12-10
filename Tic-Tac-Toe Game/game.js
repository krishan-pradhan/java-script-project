let table = document.querySelector('.game-section .table');
let boxes = table.querySelectorAll('.box');
let finalResults = document.querySelector('.show-end-game');
let resetButton = finalResults.querySelector('button');
let playerO = "O";
let playerX = "X";
let player;
let test;
let winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((item) =>{
    item.addEventListener('click', handelClicked, {once: true})
});


function handelClicked(e) {
    let cell = e.target
    let currentPlayer = player ? playerO : playerX;
    placeMark(cell, currentPlayer);
    switchTurn(currentPlayer);

    if(checkWin(currentPlayer)){
          finalResults.classList.add('show');
          finalResults.querySelector('.finale-message').innerHTML = `Winner is: ${currentPlayer}`
    } 
    else{
        let isDraw = [...boxes].every( index =>{
            return index.classList.contains(playerO) || index.classList.contains(playerX);
        });
        if( isDraw == true){
            finalResults.classList.add('show');
            finalResults.querySelector('.finale-message').innerHTML = `Draw` 
        }
    }
}
 
function placeMark(cell, currentPlayer){
   cell.classList.add(currentPlayer);
   cell.textContent = currentPlayer;
}
function switchTurn(){
    player = !player
}
function checkWin(currentPlayer) {
    return winningCombination.some(combination =>{
       return combination.every( index =>{
        return boxes[index].classList.contains(currentPlayer);
       })
    })
}

resetButton.addEventListener('click', ()=>{
    location.reload(true);
})