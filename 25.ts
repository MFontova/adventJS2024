function execute(code: string): number {
  function recursive(code: string, result: number) {
    let res = result
    let i = 0
    while (i < code.length) {
      let element = code[i]
      if(element === '+') {
        res++
      } else if(element === '-') {
        res--
      } else if(element === '[') {
        let closeIndex = 0
        for (let j = i; j < code.length; j++) {
          if(code[j] === ']') {
            closeIndex = j
            break
          }
        }
        let subCode = code.substring(i + 1, closeIndex)
        let prevRes = res
        while (res !== 0) {
          res = recursive(subCode, res)
          if(res === prevRes) break
          prevRes = res
        }
        i = closeIndex
      } else if(element === '{') {
        let closeIndex = 0
        for (let j = i; j < code.length; j++) {
          if(code[j] === '}') {
            closeIndex = j
            break
          }
        }
        let subCode = code.substring(i + 1, closeIndex)
        if(res !== 0) {
          res = recursive(subCode, res)
        }
        i = closeIndex
      }
      i++
    }
    return res
  }
  let result = recursive(code, 0)
  return result
}

console.log(execute('+++')) // 3
console.log(execute('+--')) // -1
console.log(execute('>+++[-]')) // 0
console.log(execute('>>>+{++}')) // 3
console.log(execute('+{[-]+}+')) // 2
console.log(execute('{+}{+}{+}')) // 0
console.log(execute('------[+]++')) // 2
console.log(execute('-[++{-}]+{++++}')) // 5