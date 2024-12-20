type BoxRepresentations = {
  1: string[]
  2: string[]
  5: string[]
  10: string[]
}

function distributeWeight(weight: number): string {
  const weights = [10, 5, 2, 1]
  const boxRepresentations: BoxRepresentations = {
    1: [" _ ", "|_|"] ,
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"]
  }

  let remainingWeight = weight
  let boxes: (keyof BoxRepresentations)[] = []

  for (let i = 0; i < weights.length; i++) {
    if(weights[i] <= remainingWeight) {
      remainingWeight -= weights[i]
      boxes.push(weights[i] as keyof BoxRepresentations)
      i = -1
    }
  }

  boxes.reverse()

  if(boxes.length <= 1) {
    return boxRepresentations[boxes[0] as keyof BoxRepresentations].join('\n')
  }

  let result: string = ''
  console.log('boxes length', boxes.length)
  for (let i = 0; i < boxes.length; i++) {
    const currentBox = [...boxRepresentations[boxes[i]]]
    if(boxRepresentations[boxes[i + 1]]) {
      const nextBox = [...boxRepresentations[boxes[i + 1]]]
      currentBox[currentBox.length - 1] += nextBox[0].slice(currentBox[currentBox.length - 1].length)
      nextBox.shift()
      if(i > 0) {
        currentBox.shift()
      }
      currentBox[currentBox.length - 1] = currentBox[currentBox.length - 1].trim()
      let currentBoxStr = currentBox.join('\n')
      result += currentBoxStr + '\n'
    } else {
      currentBox.shift()
      let currentBoxStr = currentBox.join('\n')
      result += currentBoxStr
    }
  }
  return result
}

// console.log(distributeWeight(1))
// Devuelve:
//  _
// |_|
// console.log('###########')

// console.log(distributeWeight(2))
// Devuelve:
//  ___
// |___|
// console.log('###########')

// console.log(distributeWeight(3))
// Devuelve:
//  _
// |_|_
// |___|
// console.log('###########')

// console.log(distributeWeight(4))
// Devuelve:
//  ___
// |___|
// |___|
// console.log('###########')

// console.log(distributeWeight(5))
// Devuelve:
//  _____
// |     |
// |_____|
// console.log('###########')

// console.log(distributeWeight(6))
// Devuelve:
//  _
// |_|___
// |     |
// |_____|
// console.log('###########')

console.log(distributeWeight(121))