function treeHeight(tree: { value: string; left: any; right: any } | null): number {
  if(!tree) return 0
  let deep = 1
  
  function recursiveCalc(node: { value: string; left: any; right: any }, deep: number): number {
    if (node.left == null && node.right == null) {
      return deep
    }
    if(node.left) {
      return recursiveCalc(node.left, deep + 1)
    }
    if(node.right) {
      return recursiveCalc(node.right, deep + 1)
    }
    return 0
  }

  return recursiveCalc(tree!, deep)
  

  // let queue: {value: string; left: any; right: any}[] = [tree]

  // while(queue.length > 0) {
  //   const queueLength = queue.length  
  //   for (let i = 0; i < queueLength; i++) {
  //     const node = queue.shift()!;

  //     if (node.left) queue.push(node.left);
  //     if (node.right) queue.push(node.right);
  //   }

  //   counter++
  // }
  // return counter
}

// Definición del árbol
const tree: { value: string; left: any; right: any } | null = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null
    },
    right: {
      value: '🎅',
      left: null,
      right: null
    }
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null
    }
  }
}

// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Llamada a la función
console.log(treeHeight(tree))
// Devuelve: 3