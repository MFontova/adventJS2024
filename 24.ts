function isTreesSynchronized(
  tree1: { value: string; left?: any; right?: any } | undefined,
  tree2: { value: string; left?: any; right?: any } | undefined
): [boolean, string] {
  let result: [boolean, string] = [true, tree1!.value]

  if(tree1 === null && tree2 == null) return result

  const queueA = [tree1]
  const queueB = [tree2]

  while (queueA.length > 0 && queueB.length > 0) {
    const currentA = queueA.shift()
    const currentB = queueB.shift()

    if(currentA?.value !== currentB?.value) {
      result = [false, tree1!.value]
    }

    if(currentA?.left){
      queueA.push(currentA.left)
    } 
    if(currentA?.right) {
      queueA.push(currentA.right)
    }

    if(currentB?.right) {
      queueB.push(currentB.right)
    }
    if(currentB?.left) {
      queueB.push(currentB.left)
    }

  }

  return result
}

const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '⭐' }
}

isTreesSynchronized(tree1, tree2) // [true, '🎄']

/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/

const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' }
}

isTreesSynchronized(tree1, tree3) // [false, '🎄']

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

isTreesSynchronized(tree1, tree4) // [false, '🎄']

// isTreesSynchronized(
//   { value: '🎅' },
//   { value: '🧑‍🎄' }
// ) // [false, '🎅']