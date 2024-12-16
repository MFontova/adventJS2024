function removeSnow(s: string): string {
  let arr = s.split('')
  let i = 0
  while (i < arr.length) {
    if(arr[i] == arr[i + 1]) {
      arr.splice(i, 2)
      i = 0
    } else {
      i++
    }
  }
  
  return arr.join('');
}

console.log(removeSnow('abbaca'))

console.log(removeSnow('zxxzoz')) // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

console.log(removeSnow('abcdd')) // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

console.log(removeSnow('zzz')) // -> "z"
// 1. Eliminamos "zz", quedando "z"

console.log(removeSnow('a')) // -> "a"
// No hay montículos repetidos