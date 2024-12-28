function generateGiftSets(gifts: string[]): string[][] {
  const result: string[][] = []

  function backtracking(start: number, current: string[]) {
    if(current.length > 0) {
      result.push([...current])
    }

    for (let i = start; i < gifts.length; i++) {
      current.push(gifts[i])

      backtracking(i + 1, current)

      current.pop()
    }
  }

  backtracking(0, [])

  return result.sort((a, b) => a.length - b.length)
}

console.log(generateGiftSets(['car', 'doll', 'puzzle']))
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

console.log(generateGiftSets(['apple', 'banana', 'cherry', 'date']))

console.log(generateGiftSets(['ball']))
// [
//   ['ball']
// ]

console.log(generateGiftSets(['game', 'pc']))
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]