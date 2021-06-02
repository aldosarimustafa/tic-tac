/*----- constants -----*/
const lookup = {
    "1": "X",
    "-1": "O",
    "null": ""
  };
const winEvent = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
//states

  let board;
  let turn;
  let winner;
  
//cached
  const square = document.querySelectorAll("input");
  const message = document.querySelector("h1");
  
//eventlistiners
  document.querySelector("main").addEventListener("click", handleMove);
  document.querySelector("button").addEventListener("click", init);

//functions
  init();
  function handleMove(evt) {
    const idx = parseInt(evt.target.type.replace("square", ""));
    if (board[idx] || winner) return;
    board[idx] = turn;
    turn *= -1;
    winner = getWinner();
    render();
  }
    
  
  function getWinner() {
          if (Math.abs(board[0] + board[1] + board[2]) === 3) return board[0];
          if (Math.abs(board[3] + board[4] + board[5]) === 3) return board[3];
          if (Math.abs(board[6] + board[7] + board[8]) === 3) return board[6];
          if (Math.abs(board[0] + board[3] + board[6]) === 3) return board[0];
          if (Math.abs(board[1] + board[4] + board[7]) === 3) return board[1];
          if (Math.abs(board[2] + board[5] + board[8]) === 3) return board[2];
          if (Math.abs(board[0] + board[4] + board[8]) === 3) return board[0];
          if (Math.abs(board[2] + board[4] + board[6]) === 3) return board[2];
          if (board.includes(null)) return null;
          return 'X';
        }
        
        
        function render() {
            board.forEach(function(square, idx) {
                square[idx].style.background = lookup[square];
            });
            if (winner === 'X') {
                message.innerHTML = "Losers! Try Harder...";
            } else if (winner) {
                message.innerHTML = `Congrats ${lookup[winner].toUpperCase()}!`;
            } else {
                message.innerHTML = `${lookup[turn].toUpperCase()}'s Turn`;
            }
        }
        
        function init() {
          board = [null, null, null, null, null, null, null, null, null];
          turn = 1;
          winner = null;
          render();
        }
        