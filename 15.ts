function drawTable(data: Array<Record<string, string | number>>): string {
  function toCamelCase(input: string) {
    const firstLetter = input.split('')[0].toUpperCase()
    return firstLetter + input.slice(1)
  }

  const keys: string[] = Object.keys(data[0])
  const columnLengths = keys.map(key => key.length)

  const rows = data.map(row => {
    return keys.map((key, index) => {
      const value = row[key].toString()
      columnLengths[index] = Math.max(columnLengths[index], value.length)
      return value
    })
  })

  const line = `+-${columnLengths.map(length => '-'.repeat(length)).join('-+-')}-+`
  const headers = `| ${keys.map((key, index) => toCamelCase(key).padEnd(columnLengths[index])).join(' | ')} |`

  const body = rows.map(row => {
    return `| ${row.map((value, index) => value.padEnd(columnLengths[index])).join(' | ')}`
  }).join('\n')

  return `${line}\n${headers}\n${line}\n${body}\n${line}`
}

console.log(drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
]))

console.log(drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
]))