document.addEventListener('DOMContentLoaded', () => {

  // the first move always starts with player X
  const squares = document.querySelectorAll('.table td');
  console.log(squares);
  const showPlayer = document.querySelector('#player');

  let currentPlayer = 'playerX';
  squares.forEach(square => {
    square.addEventListener('click', clickHandler)
  })

  var clickHandler = (e) => {
    console.log('Square clicked!');
    var td = e.target;
    const index = squareArray.indexOf(e.target);
    showPlayer.innerHTML = currentPlayer;
    if (currentPlayer === 'player X') {
      squares[index].classList.add('playerX');
      currentPlayer = 'player O';
    } else {
      squares[index].classList.add('playerO');
      currentPlayer = 'player X';
    }
  };

  // the app detects a win or tie and displays an appropriate message


  // a button resets the game for a new round of gameplay
  const startOverHandler = (e) => {
    e.preventDefault();
  }

})