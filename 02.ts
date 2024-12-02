function createFrame(names: string[]) {
  let frame = ''
  let maxLength = 0
  names.forEach(name => maxLength = Math.max(maxLength, name.length))
  const limit = Array.from({length: maxLength + 4}).fill('*').join('')
  frame += `${limit}\n`

  for (let i = 0; i < names.length; i++) {
    frame += `* ${names[i].padEnd(maxLength, ' ')} *\n`
  }

  frame += limit

  console.log(frame)

  return frame
}

createFrame(['midu', 'madeval', 'educalvolpz'])

createFrame(['midu'])

createFrame(['a', 'bb', 'ccc'])

createFrame(['a', 'bb', 'ccc', 'dddd'])