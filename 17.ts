function detectBombs(grid: boolean[][]): number[][] {
  const rows = grid.length
  const cols = grid[0].length
  let result = Array.from({length: rows}, () => Array(cols).fill(0))
  const directions: number[][] = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1]
  ]

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if(grid[i][j]) {
        for (const [dx, dy] of directions) {
          const x = i + dx
          const y = j + dy

          if(x >= 0 && y >= 0 && x < rows && y < cols) {
            result[x][y]++
          }
        }
      }
    }
  }
  
  return result
}

console.log(detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
]))
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

// detectBombs([
//   [true, false],
//   [false, false]
// ])
// [
//   [0, 1],
//   [1, 1]
// ]

// detectBombs([
//   [true, true],
//   [false, false],
//   [true, true]
// ])

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]