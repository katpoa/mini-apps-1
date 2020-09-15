document.addEventListener('DOMContentLoaded', () => {
  // the first move always starts with player X
  const squares = document.querySelectorAll('.table td');
  console.log(squares);
  const showPlayer = document.querySelector('#player');
  var currentPlayer = 'Starlight';
  showPlayer.innerHTML = currentPlayer;
  const end = document.querySelector('#end');
  end.innerHTML = 'Play on!';

  //***** PLAYER MOVES
  var clickHandler = (e, clicked = false) => {
    console.log('Square clicked!');
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
    if (checkWinner('Starlight') || checkWinner('Moonlight')) {
      if (checkWinner('Starlight')) {
        end.innerHTML = 'Game Over! Starlight wins!';
      } else {
        end.innerHTML = 'Game Over! Moonlight wins!';
      }
    } else if (boardFilled() && !checkWinner('Starlight', index) && !checkWinner('Moonlight', index)) {
      end.innerHTML = 'Draw! You\'re both winners!';
    }
  }
  //Add clickHandler to each square
  squares.forEach(square => {
    square.addEventListener('click', clickHandler);
  });

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

  var checkWinner = (player, index) => {
    //check if three in a row on any row/column/diagonal
    var row1 = document.querySelectorAll('.table #row1');
    var row2 = document.querySelectorAll('.table #row2');
    var row3 = document.querySelectorAll('.table #row3');
    var checkRow = (row) => {
      let count = 0;
      let cells = Array.from(row[0].cells);
      console.log(cells);
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
    var checkDiagonals = (index) => {
      //only if corner or middle
      //check top-right to bottom-left diagonal
      var win1 = document.querySelector('#row1 .three').classList.length > 1;
      var win12 = document.querySelector('#row3 .one').classList.length > 1
      var win13 = document.querySelector('#row1 .three').classList[1] === document.querySelector('#row2 .two').classList[1] === document.querySelector('#row1 .three').classList[1] === player;
      //check top-left to bottom-right diagonal
      var win2 = document.querySelector('#row1 .one').classList.length > 1;
      var win21 = document.querySelector('#row3 .three').classList.length > 1;
      var win22 = document.querySelector('#row1 .one').classList[1] === document.querySelector('#row2 .two').classList[1] === document.querySelector('#row3 .three').classList[1] === player;
      if(document.querySelector('#row2 .two').classList.length > 1 && ((win1 && win12 && win13) || (win2 && win21 && win22))) {
        return true;
      }
      return false;
    };

    if (checkRow(row1) || checkRow(row2) || checkRow(row3) || checkCol(col1) || checkCol(col2) || checkCol(col3) || checkDiagonals(index)) {
      return true;
    }
    return false;
  };

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
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "<span></span>";
    end.appendChild(newDiv);
  };
  startOver.addEventListener('click', startOverHandler);

})
