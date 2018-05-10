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
  WIN_COMBINATIONS.forEach(myFunction)
}

function myFunction(combo, index) {
    var win_index_1 = combo[0];
    var win_index_2 = combo[1];
    var win_index_3 = combo[2];
    position_1 = board[win_index_1];
    position_2 = board[win_index_2];
    position_3 = board[win_index_3];
    if (position_1 == "X" && position_2 == "X" && position_3 == "X") {
      return combo
    }
    else if (position_1 = "O" && position_2 == "O" && position_3 == "O") {
      return combo
    }
    else {
      return false
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
  !won(board) && full(board)
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

function select1() {
  if (box1.innerText == `-`) {
    box1.innerText = current_player
    box1.className = "box-selected"
    if (current_player == "X") {
      current_player = "O"
    }
    else {
      current_player = "X"
    }
    status.innerHTML = `Your turn, ${current_player}!`
    move(board, 0, box1.innerText)
  }
}

box1.addEventListener('click', select1)

const boxes = document.getElementsByClassName('box')

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
  }
  indexOre = box.id
  index = parseInt(indexOre) - 1
  move(board, index, box.innerText)

})
