document.addEventListener('DOMContentLoaded', () => {
  // the first move always starts with player X
  const squares = document.querySelectorAll('.table td');
  const squareArray = Array.from(squares);
  console.log('squares', squares);
  console.log('squareArray', squareArray);
  const showPlayer = document.querySelector('#player');
  showPlayer.innerHTML = 'Starlight';
  const end = document.querySelector('#end');
  end.innerHTML = 'Play on!';
// ----------------------------------------------
  //***** PLAYER MOVES
  var clickHandler = (e, clicked = false) => {
    const index = squareArray.indexOf(e.target);
    var current = showPlayer.innerHTML;

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

    winHandler(current, index);

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
  var winHandler = (player, index) => {
    if (checkWinner(player, index)) {
      if (player === 'Starlight') {
        end.innerHTML = 'Game Over! Starlight wins!';
        removeClickHandlers(clickHandler);
      } else if (player === 'Moonlight') {
        end.innerHTML = 'Game Over! Moonlight wins!';
        removeClickHandlers(clickHandler);
      }
    } else if (boardFilled() && !checkWinner(player, index)) {
      end.innerHTML = 'Draw! You\'re both winners!';
    }
  }
  var checkWinner = (player, index) => {
    //***** Array of winning combos*/
    //check if three in a row on any row/column/diagonal
    var row1 = (player === squares[0].classList[1] === squares[1].classList[1] === squares[2].classList[1]);
    var row2 = (player === squareArray[3].classList[1] === squareArray[4].classList[1] === squareArray[5].classList[1]);
    var row3 = (player === squareArray[6].classList[1] === squareArray[7].classList[1] === squareArray[8].classList[1]);
    var col1 = (player === squareArray[0].classList[1] === squareArray[3].classList[1] === squareArray[6].classList[1]);
    var col2 = (player === squareArray[1].classList[1] === squareArray[4].classList[1] === squareArray[7].classList[1]);
    var col3 = (player === squareArray[2].classList[1] === squareArray[5].classList[1] === squareArray[8].classList[1]);

    var left_right = (player === squareArray[0].classList[1] === squareArray[4].classList[1] === squareArray[8].classList[1]);
    var right_left = (player === squareArray[2].classList[1] === squareArray[4].classList[1] === squareArray[6].classList[1]);

    if (row1 || row2 || row3 || col1 || col2 || col3 || left_right || right_left) {
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
