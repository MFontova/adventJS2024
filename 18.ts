function findInAgenda(agenda: string, phone: string): { name: string; address: string } | null {
  const registers = agenda.split('\n')
  const phoneRegex = /\+([0-9]|-)*/gm
  const nameRegex = /<+([a-zA-Z]|\s)*>/g
  const result: {name: string, address: string}[] = []

  registers.forEach((register, i) => {
    let phoneMatch = register.match(phoneRegex)
    let nameMatch = register.match(nameRegex)
    let p = phoneMatch == null ? null : phoneMatch![0]
    let n = nameMatch == null ? null : nameMatch![0].slice(1, nameMatch![0].length - 1)
    let a = register.replace(p!, '').replace(`<${n!}>`, '').trim()

    if(p?.includes(phone)) {
      result.push(
        {
          name: n!,
          address: a!
        }
      )
    }
  })

  if(result.length !== 1) {
    return null
  }
  return result[0]
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

console.log(findInAgenda(agenda, '34-600-123-456'))
// { name: "Juan Perez", address: "Calle Gran Via 12" }

console.log(findInAgenda(agenda, '600-987'))
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

console.log(findInAgenda(agenda, '111'))
// null
// Explicación: No hay resultados

console.log(findInAgenda(agenda, '1'))
// null
// Explicación: Demasiados resultados