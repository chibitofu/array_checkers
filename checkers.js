var checkerboard = [[null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null]];

function setSquare(player, row, col) {
  checkerboard[row][col] = player;
  return checkerboard;
}

function getPieceAt(row, col) {
  if (checkerboard[row][col] === 'R' || 'B') {
      checkerboard[row][col] = null;
  } else if (checkerboard[row][col] == null);
  return checkerboard;
}
//Sets a piece to null if it's "R" or "B". Else leaves it as null.//

function erase(n) {
  n = null;
}
//Set a cell to null//

function clearBoard() {
  checkerboard.map(erase);
    return checkerboard;
}
//Clears board of all piece, and sets them to null.//

function setUpRed() {
  for (var i = 0; i < checkerboard.length; i++) {
      for (var j = 0; j < 3; j++) {
        if (i%2 !== 0 && j%2 === 0) {
            checkerboard[j][i] = null;
        } else if (i%2 === 0 && j%2 !== 0) {
            checkerboard[j][i] = null;
        } else (checkerboard[j][i] = "R");
      }
  }
  return checkerboard;
}
//Sets up Reds side of the board.//

function setUpBlack() {
  for (var j = (checkerboard.length - 1); j >= 5; j-=1) {
    for (var i = 0; i < checkerboard[0].length; i++) {
      if (i%2 === 0 && j%2 !=+ 0) {
          checkerboard[j][i] = null;
      } else if (i%2 !== 0 && j%2 === 0) {
          checkerboard[j][i] = null;
      } else (checkerboard[j][i] = "B");
    }
  }
return checkerboard;
}
//Sets up Blacks side of the board.//
