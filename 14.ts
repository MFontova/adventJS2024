function minMovesToStables(reindeer: number[], stables: number[]): number {
  let moves = 0
  reindeer.sort()
  stables.sort()
  for (let i = 0; i < reindeer.length; i++) {
    moves += Math.abs(reindeer[i] - stables[i])    
  }
  return moves
}

minMovesToStables([2, 6, 9], [3, 8, 5]) // -> 3
minMovesToStables([1, 1, 3], [1, 8, 4]) // -> 8