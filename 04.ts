function createXmasTree(height: number, ornament: string): string {
  let tree = []
  let prev = 1
  let space = height - 1
  const base = '_'.repeat(space) + '#' + '_'.repeat(space)
  for (let i = 0; i < height; i++) {
      tree.push('_'.repeat(space) + ornament.repeat(prev) + '_'.repeat(space))
      prev += 2 
      space--
  }
  console.log(tree.join('\n') + '\n' + base + '\n' + base)
  return tree.join('\n') + '\n' + base + '\n' + base
}

const tree = createXmasTree(5, '*')
console.log(tree)