function drawTable(data: Array<Record<string, string | number>>): string {
  function toCamelCase(input: string) {
    const firstLetter = input.split('')[0].toUpperCase()
    return firstLetter + input.slice(1)
  }

  const keys: string[] = Object.keys(data[0])
  const firstColValues: string[] = []

  const secondColValues: string[] = []

  data.forEach(element => {
    firstColValues.push(element[keys[0]].toString())
    secondColValues.push(element[keys[1]].toString())
  })

  let firstColLength = keys[0].length
  let secondColLength = keys[1].length
  firstColValues.forEach(val => {
    if(val.length > firstColLength) {
      firstColLength = val.length
    }
  })
  secondColValues.forEach(val => {
    if(val.length > secondColLength) {
      secondColLength = val.length
    }
  })

  const line = `+-${'-'.repeat(firstColLength)}-+-${'-'.repeat(secondColLength)}-+`
  const endLine = `+-${'-'.repeat(firstColLength)}-+-${'-'.repeat(secondColLength)}-+`
  const headers = `| ${toCamelCase(keys[0]).padEnd(firstColLength)} | ${toCamelCase(keys[1]).padEnd(secondColLength)} |`
  
  let body = ''
  for (let i = 0; i < firstColValues.length; i++) {
    body += `
| ${firstColValues[i].padEnd(firstColLength)} | ${secondColValues[i].padEnd(secondColLength)} |`
  }

  console.log(`${line}
${headers}
${line}${body}
${endLine}`)

  return line + headers + line + body + endLine
}

drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
])