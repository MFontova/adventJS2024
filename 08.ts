function drawRace(indices: number[], length: number): string {
  let result = ''
  let standardLine = '~'.repeat(length)
  let runners = indices.length

  const lines = indices.map((position, i) => {
    let startPad = ' '.repeat(runners - (i + 1))
    let line = standardLine.split('')
    const currentPosition = position < 0 ? length + position : position

    if(currentPosition > 0 && currentPosition < length) {
      line[currentPosition] = 'r'
    }

    return startPad + line.join('') + ` /${i + 1}`
  })
  console.log(lines.join('\n'))
  return lines.join('\n')
}

drawRace([0, 5, -3], 10)

drawRace([2, -1, 0, 5], 8)

drawRace([3, 7, -2], 12)
