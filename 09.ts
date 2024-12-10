type Space = '·' | '@' | '*' | 'o'
type Board = string[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

function moveTrain(board: Board, mov: Movement): Result {
  const movements: Record<Movement, number[]> = {
    U: [-1, 0],
    D: [1, 0],
    R: [0, 1],
    L: [0, -1]
  }

  const results: Record<string, Result> = {
    '·': 'none',
    'o': 'crash',
    '*': 'eat'
  }

  let target = ''
  let [x, y] = movements[mov]
  for (let i = 0; i < board.length; i++) {
    let row = board[i]
    if(row.includes('@')) {
      let targetRow = i + x
      let targetCol = row.indexOf('@') + y
      if(targetRow < 0 || targetCol < 0 || targetRow >= board.length || targetCol >= row.length) {
        target = 'o'
      } else {
        target = board[targetRow][targetCol]
      }
    }
  }
  return results[target]
}

const board = [
  '·····', 
  '*····', 
  '@····', 
  'o····', 
  'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

// console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

// console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

// console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha
