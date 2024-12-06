function inBox(box: string[]): boolean {
  for (let x = 1; x < box.length - 1; x++) {
    let y = box[x].indexOf('*')
    if(y > 0 && y < box[x].length - 1) {
      return true
    }
  }
  return false
}

console.log(inBox([
  "###",
  "#*#",
  "###"
]))

console.log(inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]))

console.log(inBox([
  "*####",
  "#   #",
  "#  #*",
  "####"
]))

console.log(inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]))

console.log(inBox([
  "#####",
  "#   #",
  "#  #*",
  "####"
]))