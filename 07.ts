function fixPackages(packages: string): string {
  let stack: number[] = []
  let result: string[] = [...packages]

  for (let i = 0; i < result.length; i++) {
    if(result[i] === '(') {
      stack.push(i)
    } else if(result[i] === ')') {
      let openIndex = stack.pop()!
      let reversed = result
        .slice(openIndex + 1, i)
        .reverse()
      result.splice(openIndex, i - openIndex + 1, ...reversed)

      i = openIndex - 1
    }
  }
  return result.join('')
}

console.log(fixPackages('a(cb)de'))

console.log(fixPackages('a(bc)(def)gh'))

// fixPackages('abc(def(gh)i)jk')

// fixPackages('a(b(c))e')