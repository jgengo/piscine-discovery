import { writeFile } from 'fs';

const input = process.argv[2]

const res = input.split(' ').map( word => {
  const len = Math.ceil(word.length/2)
  const partOne = word.slice(0, len)
  const partTwo = word.slice(len)
  
  return partTwo + partOne
}).join(' ')

writeFile('./verydisco-forever.txt', res, (err) => {
  if (err) return console.error(err);
})