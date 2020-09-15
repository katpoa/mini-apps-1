document.addEventListener('DOMContentLoaded', () => {
  // the first move always starts with player X
  const squares = document.querySelectorAll('.table td');
  const showPlayer = document.querySelector('#player');
  var currentPlayer = 'Starlight';
  showPlayer.innerHTML = currentPlayer;
  const end = document.querySelector('#end');
  end.innerHTML = 'Play on!';
// ----------------------------------------------
  //***** PLAYER MOVES
  var clickHandler = (e, clicked = false) => {
    const squareArray = Array.from(squares);
    const index = squareArray.indexOf(e.target);

    //check if square taken yet before filling
    if (squares[index].classList.length > 1) {
      end.innerHTML = "Invalid move! Square already taken - try another!";
    } else {
      if (!boardFilled()) {
        if (showPlayer.innerHTML === 'Starlight') {
          squares[index].classList.add('Starlight');
          showPlayer.innerHTML = 'Moonlight';
        } else {
          squares[index].classList.add('Moonlight');
          showPlayer.innerHTML = 'Starlight';
        }
      }
    }
    if (checkWinner('Starlight', index) || checkWinner('Moonlight', index)) {
      if (checkWinner('Starlight', index)) {
        end.innerHTML = 'Game Over! Starlight wins!';
        removeClickHandlers(clickHandler);
      } else {
        end.innerHTML = 'Game Over! Moonlight wins!';
        removeClickHandlers(clickHandler);
      }
    } else if (boardFilled() && !checkWinner('Starlight', index) && !checkWinner('Moonlight', index)) {
      end.innerHTML = 'Draw! You\'re both winners!';
    }
  }
  //Add clickHandler to each square
  var addClickHandlers = (clickHandler) => {
    squares.forEach(square => {
      square.addEventListener('click', clickHandler);
    });
  }
  addClickHandlers(clickHandler);
  //Remove clickHandlers from each square (after someone wins!)
  var removeClickHandlers = (clickHandler) => {
    squares.forEach(square => {
      square.removeEventListener('click', clickHandler);
    });
  }

  // ***** WIN/TIE condition: the app detects a win or tie and displays an appropriate message
  var boardFilled = () => {
    let filled = true;
    squares.forEach(square => {
      if (square.classList.length <= 1) {
        filled = false;
      }
    })
    return filled;
  }
// -----------------------------------------------------
  var checkWinner = (player, index) => {
    //check if three in a row on any row/column/diagonal
    var row1 = document.querySelectorAll('.table #row1');
    var row2 = document.querySelectorAll('.table #row2');
    var row3 = document.querySelectorAll('.table #row3');
    var checkRow = (row) => {
      let count = 0;
      let cells = Array.from(row[0].cells);
      cells.forEach(square => {
        if (square.classList.length > 1 && square.classList[1] === player) {
          count++;
        }
      })
      if (count === 3) {
        return true;
      }
      return false;
    };
    var col1 = document.querySelectorAll('.one');
    var col2 = document.querySelectorAll('.two');
    var col3 = document.querySelectorAll('.three');
    var checkCol = (col) => {
      let count = 0;
      col.forEach(square => {
        if (square.classList.length > 1 && square.classList[1] === player) {
          count++;
        }
      })
      if (count === 3) {
        return true;
      }
      return false;
    };

    //*****Check Diagonals */
    var checkDiagonals = (index) => {
      //only if corner or middle
      //check top-right to bottom-left diagonal
      if (squares[index] == document.querySelector('#row1 .three') || squares[index] == document.querySelector('#row3 .one') || squares[index] == document.querySelector('#row2 .two')) {

        var win1 = document.querySelector('#row1 .three').classList.length > 1;
        var win12 = document.querySelector('#row3 .one').classList.length > 1
        var win13 = document.querySelector('#row1 .three').classList.contains(player) === document.querySelector('#row2 .two').classList.contains(player) === document.querySelector('#row3 .one').classList.contains(player);
        if(win1 && win12 && win13) {
          return true;
        }
      } else if (squares[index] == document.querySelector('#row1 .one') || squares[index] == document.querySelector('#row3 .three') || squares[index] == document.querySelector('#row2 .two')) {
        //check top-left to bottom-right diagonal
        var win2 = document.querySelector('#row1 .one').classList.length > 1;
        var win21 = document.querySelector('#row3 .three').classList.length > 1;
        var win22 = document.querySelector('#row1 .one').classList.contains(player) === document.querySelector('#row2 .two').classList.contains(player) === document.querySelector('#row3 .three').classList.contains(player);
        if(win2 && win21 && win22) {
          return true;
        }
      }
      return false;
    };

    if (checkRow(row1) || checkRow(row2) || checkRow(row3) || checkCol(col1) || checkCol(col2) || checkCol(col3) || checkDiagonals(index)) {
      return true;
    }
    return false;
  };
// -----------------------------------------------------
//*****Start Over button - clear board */
  var startOver = document.getElementById('btn');
  // a button resets the game for a new round of gameplay
  const startOverHandler = (e) => {
    e.preventDefault();
    end.innerHTML = 'Play On!';
    showPlayer.innerHTML = 'Starlight';
    //drop classes of all the squares
    squares.forEach(square => {
      if (square.classList.length > 1) {
        if (square.classList[1] === 'Starlight') {
          square.classList.remove('Starlight');
        } else {
          square.classList.remove('Moonlight');
        }
      }
    });
    addClickHandlers(clickHandler);
  };
  startOver.addEventListener('click', startOverHandler);

});
