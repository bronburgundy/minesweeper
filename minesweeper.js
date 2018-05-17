document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var board = {
  cells: [
  // 9 cells in the board, each with different properties for x, y, hidden, isMarked, isMine & surroundingMines
    {row: 0, col: 0, hidden: true, isMarked: false, isMine: false, surroundingMines: 1},
    {row: 0, col: 1, hidden: true, isMarked: false, isMine: true, surroundingMines: 0},
    {row: 0, col: 2, hidden: true, isMarked: false, isMine: false, surroundingMines: 2},
    {row: 1, col: 0, hidden: true, isMarked: false, isMine: false, surroundingMines: 1},
    {row: 1, col: 1, hidden: true, isMarked: false, isMine: false, surroundingMines: 3},
    {row: 1, col: 2, hidden: true, isMarked: false, isMine: true, surroundingMines: 0},
    {row: 2, col: 0, hidden: true, isMarked: false, isMine: true, surroundingMines: 0},
    {row: 2, col: 1, hidden: true, isMarked: false, isMine: false, surroundingMines: 2},
    {row: 2, col: 2, hidden: true, isMarked: false, isMine: false, surroundingMines: 1}
  ]
}    
  
  /*  for (var x = 0; x < 3; x++) {
    for (var y = 0; y < 3; y++) {
      board.cells.push(
        {
          hidden: true;
          isMine: ;
          isMarked: false;
          surr
          
        }
      )
    }

  } */
// 

function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
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
}

