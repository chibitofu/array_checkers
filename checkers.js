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
  } else if (checkerboard[row][col] === null);
  return checkerboard;
}
//Sets a piece to null if it's "R" or "B". Else leaves it as null.//

function clearBoard() {
  for (var i = 0; i < checkerboard[0].length; i++) {
    for (var j = 0; j < checkerboard.length; j++) {
      checkerboard[i][j] = null;
    }
  }
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
      if (i%2 === 0 && j%2 !== 0) {
        checkerboard[j][i] = null;
      } else if (i%2 !== 0 && j%2 === 0) {
        checkerboard[j][i] = null;
      } else (checkerboard[j][i] = "B");
    }
  }
  return checkerboard;
}
//Sets up Blacks side of the board.//

var pieces={"Red":[[0,0],[0,2],[0,4],[0,6],[1,1],[1,3],[1,5],[1,7],[2,0],[2,2],[2,4],[2,6]],
"Black":[[5,1],[5,3],[5,5],[5,7],[6,0],[6,2],[6,4],[6,6],[7,1],[7,3],[7,5],[7,7]]};
//Shows position of all red and black pieces when they're in the starting positions.//

pieces["Red"].map(function(piece){
  var row = piece[0];
  var col = piece[1];
  return checkerboard[row][col] === "R";
});

pieces["Black"].map(function(piece){
  var row = piece[0];
  var col = piece[1];
  return checkerboard[row][col] === "B";
});
