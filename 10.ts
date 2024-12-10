function compile (instructions: string[]): number | undefined {
  let registers: Record<string, number> = {}

  for (let i = 0; i < instructions.length; i++) {
    const currentInstruction = instructions[i].split(' ')
    if(currentInstruction[0] === 'MOV') {
      registers[currentInstruction[2]] = isNaN(Number(currentInstruction[1])) ? (registers[currentInstruction[1]] || 0) : Number(currentInstruction[1])
    }
    if(currentInstruction[0] === 'INC') {
      registers[currentInstruction[1]] = (registers[currentInstruction[1]] || 0) + 1
    }
    if(currentInstruction[0] === 'DEC') {
      registers[currentInstruction[1]] = (registers[currentInstruction[1]] || 0) - 1
    }
    if(currentInstruction[0] === 'JMP') {
      if((registers[currentInstruction[1]] || 0) === 0) {
        i = Number(currentInstruction[2]) - 1
      }
    }
  }
  return registers['A'] == undefined ? undefined : registers['A']
}

// const instructions = [
//   'MOV -1 C', // copia -1 al registro 'C',
//   'INC C', // incrementa el valor del registro 'C'
//   'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
//   'MOV C A', // copia el registro 'C' al registro 'a',
//   'INC A' // incrementa el valor del registro 'a'
// ]

// const instructions = [
//   "MOV 0 A",
//   "INC A"
// ]

// const instructions = [
//   "INC A",
//   "INC A",
//   "DEC A",
//   "MOV A B"
// ]

const instructions = [
  "INC C",
  "DEC B",
  "MOV C Y",
  "INC Y"
]

// const instructions = [
//   "MOV 2 X",
//   "DEC X",
//   "DEC X",
//   "JMP X 1",
//   "MOV X A"
// ]

// const instructions = [
//   "MOV 3 C",
//   "DEC C",
//   "DEC C",
//   "DEC C",
//   "JMP C 3",
//   "MOV C A"
// ]

console.log(compile(instructions))