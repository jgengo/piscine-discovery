import { readFileSync } from 'fs';

const getContent = (fileName) => {
  const content = readFileSync(fileName, 'utf8')
  return content
}

const decypher = (input) => {
  return input.split(' ').map( word => {
    const len = Math.floor(word.length/2)
    const partOne = word.slice(0, len)
    const partTwo = word.slice(len)
    
    return partTwo + partOne
  }).join(' ')
}


const content = getContent(process.argv[2])
console.log(decypher(content))
