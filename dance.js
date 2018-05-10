//working on draw() and won()

const WIN_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

var board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]

var current_player = "X"

function move(board, index, token) {
  board[index] = token
}

function position_taken(board, index) {
  if (board[index] == "-") {
    return false
  }
  else {
    return true
  }
}

function won(board) {
  for (i = 0; i < WIN_COMBINATIONS.length; i++) {
    var win_index_1 = WIN_COMBINATIONS[i][0];
    var win_index_2 = WIN_COMBINATIONS[i][1];
    var win_index_3 = WIN_COMBINATIONS[i][2];
    var position_1 = board[win_index_1];
    var position_2 = board[win_index_2];
    var position_3 = board[win_index_3];
    if (position_1 == "X" && position_2 == "X" && position_3 == "X") {
      return WIN_COMBINATIONS[i]
    }
    else if (position_1 == "O" && position_2 == "O" && position_3 == "O") {
      return WIN_COMBINATIONS[i]
    }
  }
}

function isXorO(token) {
  if (token == "X" || token == "O") {
    return true
  }
}

function full(board) {
  return board.every(isXorO)
}

function draw(board) {
  return !won(board) && full(board)
}

function over(board) {
  return won(board) || draw(board) || full(board)
}

function winner(board) {
  if (won(board)) {
    winnerat = won(board);
    winneratexplicit = winnerat[0];
    winnertoken = board[winneratexplicit];
    return winnertoken
  }
}

const box1 = document.getElementById(1)
const box2 = document.getElementById(2)
const box3 = document.getElementById(3)
const box4 = document.getElementById(4)
const box5 = document.getElementById(5)
const box6 = document.getElementById(6)
const box7 = document.getElementById(7)
const box8 = document.getElementById(8)
const box9 = document.getElementById(9)
const status = document.getElementById('status')
const boxes = document.getElementsByClassName('box')

function gamecheck(board) {
  if (over(board)) {
    status.className = "status-final";
  }
  if (won(board)) {
    winner(board)
    status.innerHTML = `${winnertoken} won!`;
  }
  if (draw(board)) {
    status.innerHTML = "Draw!"
  }
}

document.addEventListener('click', function(e){
  if(e.target.className=="box"){
    box = e.target;
    box.innerText = current_player;
    box.className = "box-selected";
    if (current_player == "X") {
      current_player = "O"
    }
    else {
      current_player = "X"
    }
    status.innerHTML = `Your turn, ${current_player}!`
    indexOre = box.id
    index = parseInt(indexOre) -1
  }
  move(board, index, box.innerText)
  gamecheck(board)
})
