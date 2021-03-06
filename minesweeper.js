document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
 
var board = {
  cells: [
    {row: 0, col: 0, hidden: true, isMarked: false, isMine: false, surroundingMines: ''},
    {row: 0, col: 1, hidden: true, isMarked: false, isMine: true, surroundingMines: ''},
    {row: 0, col: 2, hidden: true, isMarked: false, isMine: false, surroundingMines: ''},
    {row: 1, col: 0, hidden: true, isMarked: false, isMine: false, surroundingMines: ''},
    {row: 1, col: 1, hidden: true, isMarked: false, isMine: false, surroundingMines: ''},
    {row: 1, col: 2, hidden: true, isMarked: false, isMine: true, surroundingMines: ''},
    {row: 2, col: 0, hidden: true, isMarked: false, isMine: true, surroundingMines: ''},
    {row: 2, col: 1, hidden: true, isMarked: false, isMine: false, surroundingMines: ''},
    {row: 2, col: 2, hidden: true, isMarked: false, isMine: false, surroundingMines: ''},
  ]
}  

/*
function createBoard {

}
*/

function startGame () {  // Don't remove this function call: it makes the game work!
  for (var i = 0; i < board.cells.length; i++) {   // for loop to loop through contents of board.cells array
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  lib.initBoard()
  document.addEventListener("click", checkForWin)
  document.addEventListener("contextmenu", checkForWin)
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin () {
  for (var i = 0; i < board.cells.length; i++) {
    if (cell.isMine && cell.isMarked) {
      return;
    } else if (!cell.isMine && cell.hidden) {
      return;
    }
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)

  lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
// var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.


function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells (cell.row, cell.col);
  var count = 0;
  for (var i = 0; i < surrounding.length; i++) {
    if(cell.isMine[i] === true) {
      count++;
    }
  } 
  return count; 
}







//WORKING CODE:

/*
document.addEventListener ('DOMContentLoaded', startGame);

// Define your `board` object here!
var board;

function createCells(){
  var board = {
    cells: [],
  };
  
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      board.cells.push ({
        row: i,
        col: j,
        isMine: Math.floor (Math.random () * 100) >= 85,
        isMarked: false,
        hidden: true,
        surroundingMines: 0,
      });
    }
  }
  return board;
}


function startGame () {
  board = createCells();
  // Don't remove this function call: it makes the game work!
  lib.initBoard ();
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines (board.cells[i]);
  }
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
  //console.log("CheckForWin");
  var mines = 0;
  var cleanCell = 0;
  
  for (var g = 0; g <board.cells.length; g++){
    if (board.cells[g].isMine){
      mines++;
    }
    else {
      cleanCell++;
    }
  }

  for (var i = 0; i < board.cells.length; i++){
    var cell = board.cells[i];
    if(cell.isMine && cell.isMarked){ // mine && (marked)
      mines--;
    }
    else if(!cell.isMine && !cell.hidden){ // !mine && !hidden
      cleanCell--;
    }
  }
  //console.log(mines);
  if(mines === 0 || cleanCell === 0){
    lib.displayMessage('You win!');
    var winningSound = new makeSound("sounds/Ta Da-SoundBible.com-1884170640.mp3");
    winningSound.play();
    removeListeners();
  }
  return true;
}

function clearBoard(){
  var board = document.getElementsByClassName('board')[0];
    board.innerHTML = '';
}

// A function to reset the board after the game has ended.
// check if user wins or loses
// if yes, reset the board
function resetGame() {
  removeListeners(); 
  clearBoard();
  startGame();
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells (cell.row, cell.col);
  var surroundingMines = 0;
  for (var i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine) {
      surroundingMines++;
    }
  }
  return surroundingMines;
}
*/
