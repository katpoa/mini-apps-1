document.addEventListener('DOMContentLoaded', () => {
  // the first move always starts with player X
  const squares = document.querySelectorAll('.table td');
  console.log(squares);
  const showPlayer = document.querySelector('#player');
  let currentPlayer = 'player X';
  showPlayer.innerHTML = currentPlayer;


  //***** Player moves!!!
  var clickHandler = (e, clicked = false) => {
    console.log('Square clicked!');
    // document.querySelector(e.target).innerHTML = "X";
    // showPlayer.innerHTML = currentPlayer;

    const squareArray = Array.from(squares);
    const index = squareArray.indexOf(e.target);
    if (showPlayer.innerHTML === 'player X') {
      squares[index].classList.add('playerX');
      showPlayer.innerHTML = 'player O';
    } else {
      squares[index].classList.add('playerO');
      showPlayer.innerHTML = 'player X';
    }
    // checkWinner();
  }

  squares.forEach(square => {
    square.addEventListener('click', clickHandler);
    console.log('Should have event listener now: ', square);
  });

  // the app detects a win or tie and displays an appropriate message
  var checkWinner = (player) => {
    //check if three in a row on any row/column/diagonal
    var win = false;
    var row1 = document.querySelector('#1');
    var row2 = document.querySelector('#2');
    var row3 = document.querySelector('#3');


  };

  var checkTie = () => {
    //if all squares.classList !== empty
    //!checkWinner('playerX') && !checkWinner('playerO')
    // return "Tie! You're both winners!"
  }

  // a button resets the game for a new round of gameplay
  const startOverHandler = (e) => {
    e.preventDefault();
  }

})