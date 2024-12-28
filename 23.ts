function findMissingNumbers(nums: number[]): number[] {
  const result: number[] = []
  nums.sort()

  for (let i = 1; i < nums[nums.length - 1]; i++) {
    if(!nums.includes(i)) {
      result.push(i)
    }
  }
  return result
}

findMissingNumbers([1, 2, 4, 6])
// [3, 5]

findMissingNumbers([4, 8, 7, 2])
// // [1, 3, 5, 6]

findMissingNumbers([3, 2, 1, 1])
// // []

findMissingNumbers([5, 5, 5, 3, 3, 2, 1])
// // [4]