var board = [

  ['X', 'X', 'O'],
  ['X', 'O', 'O'],
  ['O', '', 'X'],


]

// 判断输赢
var res = gameWin(board)

console.log(res);
function gameWin (borad) {

  // 游戏规则,X先放，O后放，如果X赢得话，X的数量比O多一个,O赢得话，O的数量与X相等


  let xCount = 0
  let oCount = 0

  for (let i = 0; i < board.length; i++) {

    for (let j = 0; j < board[0].length; j++) {

      if (board[i][j] === 'X') {
        xCount++
      }

      if (board[i][j] === 'O') oCount++

    }


  }

  if (xCount !== oCount && xCount - oCount != 1) return false

  if (win(borad, 'XXX', 3) && xCount - oCount == 1) return 'X'
  if (win(borad, 'OOO', 3) && xCount - oCount == 0) return 'O'

  return false

  // 判断输赢

  function win (board, flag, n) {


    // 竖向和横向

    for (let i = 0; i < n; i++) {

      if (board[i].join('') == flag) return true
      let str = ''
      for (let k = 0; k < n; k++) {
        str += board[k][i]
      }
      if (str == flag) return true

    }
    // 两个斜方向,斜左边

    let str1 = ''
    for (let i = 0; i < n; i++) {
      str1 += board[i][i]
    }

    if (str1 == flag) return true
    // 斜右边
    let str2 = ''
    var len = n - 1
    for (let i = 0; i <= len; i++) {
      str2 += borad[i][len - i]
    }

    if (str2 == flag) return true

    return false

  }


}