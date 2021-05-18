[
  [1, 0, ''],
  [1, 0, ''],
  [1, '', ''],
]


function bfs1 (i, j, board, value) {


  //  8个方向
  var dx = [1, 0, -1, 1, 1, -1, 0]
  var dy = [0, 1, -1, 1, -1, 1, -1]
  var count = 1
  var m = 1
  for (let k = 0; k < 8; k++) {

    var x = i + dx[k]
    var y = j + dy[k]

    if (x >= 0 && x < board.length && y >= 0 && y < board[0].length) {

      if (board[x][y] == value) {
        count++
      }



    }


  }

  console.log(count);

  return count



}


function bfs (i, j, borad, value) {


  // 判断8个方向
  var x = i
  var y = j
  var count = 1

  // 判断上下

  while (x > 0) {

    x--
    if (borad[x][y] === value) {
      count++
    } else {
      break
    }



  }
  x = i, y = j

  while (x < board.length - 1) {

    x++
    if (board[x][y] === value) {
      count++
    } else {
      break
    }



  }


  if (count == 3) return value

  count = 1

  // 左右
  x = i, y = j
  while (y > 0) {
    y--
    if (board[x][y] === value) {
      count++
    } else {
      break
    }




  }
  y = j, x = i
  while (y < board[0].length - 1) {
    y++
    if (board[x][y] === value) {
      count++
    } else {
      break
    }



  }

  if (count == 3) return value

  count = 1

  //  
  x = i, y = j
  while (x > 0 && y > 0) {
    x--
    y--
    if (board[x][y] === value) {
      count++
    } else {
      break
    }




  }
  x = i, y = j
  while (x < board.length - 1 && y < board[0].length - 1) {

    x++
    y++
    if (board[x][y] === value) {
      count++
    } else {
      break
    }


  }

  if (count == 3) return value
  count = 1
  x = i, y = j
  while (x > 0 && y < board[0].length - 1) {
    x--
    y++
    if (board[x][y] === value) {
      count++
    } else {
      break
    }

  }
  x = i, y = j
  while (x < board.length - 1 && y > 0) {
    x++
    y--
    if (board[x][y] === value) {
      count++
    } else {
      break
    }



  }

  if (count == 3) return value





}


function getBoradStatus (board = []) {


  var row = board.length
  var colum = board[0].length

  var map = {
    1: 'X',
    0: 'O'
  }

  for (let i = 0; i < row; i++) {


    for (let j = 0; j < colum; j++) {


      var value = board[i][j]

      if (value === 1) {

        var res = bfs(i, j, board, value)

        if (res === 1) {
          return map['1']

        }


      }
      if (value === 0) {

        var res = bfs(i, j, board, value)

        if (res === 0) {
          return map['0']

        }

      }


    }




  }



  return -1










}


var board = [
  [1, 0, 0],
  [1, 1, ''],
  [0, '', 1],
]


var res = getBoradStatus(board)

console.log(res);