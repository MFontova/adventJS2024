function decodeFilename(filename: string): string {
  let removedNumber = filename.split('_').slice(1).join('_')
  let removedExtension = removedNumber.split('.').slice(0, -1).join('.')
  return removedExtension
}

decodeFilename('2023122512345678_sleighDesign.png.grinchwa')