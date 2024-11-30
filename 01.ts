function prepareGifts(gifts: number[]): number[] {
  const giftsSet = new Set<number>(gifts)
  return [...giftsSet].sort((a, b) => a - b)
}

const gifts1: number[] = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]

const gifts2: number[] = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2) // [5, 6]

const gifts3: number[] = []
const preparedGifts3 = prepareGifts(gifts3)
console.log(preparedGifts3) // []
// No hay regalos, la lista queda vacía

const gifts4: number[] = [100, 1000, 100, 500, 200, 500, 200]
const preparedGifts4 = prepareGifts(gifts4)
console.log(preparedGifts4)