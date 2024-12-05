type Shoe = {
  type: 'I' | 'R'
  size: number
}

type GroupedShoes = {
  [size: string]: {
    [type: string]: number
  }
}

function organizeShoes(shoes: Shoe[]): number[] {
  const pairs: number[] = []
  const list: string[] = []

  shoes.forEach(shoe => {
    let type = shoe.type
    let size = shoe.size
    let pairType = type == "I" ? "R" : "I"
    let reference = `${type}${size}`
    let pairReference = `${pairType}${size}`

    if(list.includes(pairReference)) {
      list.splice(list.indexOf(pairReference), 1)
      pairs.push(size)
    } else {
      list.push(reference)
    }
  })
  return pairs
}

const shoes: Shoe[] = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2: Shoe[] = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]

organizeShoes(shoes2)
// [38, 38]

const shoes3: Shoe[] = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

organizeShoes(shoes3)
// []