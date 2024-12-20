function fixGiftList(received: string[], expected: string[]): { missing: Record<string, number>, extra: Record<string, number> } {
  const result: { missing: Record<string, number>, extra: Record<string, number> } = {missing: {}, extra: {}}
  const allItems: Set<string> = new Set([...received, ...expected])

  allItems.forEach(item => {
    let receivedItemCount = received.filter(i => i === item).length
    let expectedItemCount = expected.filter(i => i === item).length

    if(receivedItemCount - expectedItemCount < 0) {
      result.missing[item] = Math.abs(receivedItemCount - expectedItemCount)
    } else if(receivedItemCount - expectedItemCount > 0) {
      result.extra[item] = Math.abs(receivedItemCount - expectedItemCount)
    }
  })

  return result
}

console.log(fixGiftList([], ['bear', 'car', 'car']))

console.log(fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball']))
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

console.log(fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
))
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

console.log(fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
))
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

console.log(fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear']))
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }