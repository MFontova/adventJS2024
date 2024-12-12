function calculatePrice(ornaments: string): number | undefined {
  const values: Record<string, number> = {
    '*': 1,
    'o': 5,
    '^': 10,
    '#': 50,
    '@': 100,
  }

  let result = 0
  for (let i = 0; i < ornaments.length; i++) {
    if(values[ornaments[i]] === undefined) {
      return undefined
    }
    if(values[ornaments[i]] < values[ornaments[i + 1]]) {
      result -= values[ornaments[i]]
    } else {
      result += values[ornaments[i]]
    }
  }
  return result
}

// calculatePrice('***')  // 3   (1 + 1 + 1)
// calculatePrice('*o')   // 4   (5 - 1)
// calculatePrice('o*')   // 6   (5 + 1)
// calculatePrice('*o*')  // 5  (-1 + 5 + 1) 
// calculatePrice('**o*') // 6  (1 - 1 + 5 + 1) 
// calculatePrice('o***') // 8   (5 + 3)
// calculatePrice('*o@')  // 94  (-5 - 1 + 100)
// calculatePrice('*#')   // 49  (-1 + 50)
// calculatePrice('@@@')  // 300 (100 + 100 + 100)
// calculatePrice('#@')   // 50  (-50 + 100)
console.log(calculatePrice('#@Z'))  // undefined (Z es desconocido)