import { readFileSync, writeFileSync } from 'fs';

const file = process.argv[2]
const wut = process.argv[3]

const encode = (file, saving) => {
  const content = readFileSync(file)
  writeFileSync(saving, content.toString('base64'))
}

const decode = (file, saving) => {
  const content = Buffer.from(readFileSync(file, 'utf8'), 'base64')
  writeFileSync(saving, content.toString())
}

if (wut == 'encode')
{
  const save = process.argv[4] || 'cypher.txt'
  encode(file, save)
} else if ( wut == 'decode') {
  const save = process.argv[4] || 'clear.txt'
  decode(file, save)
} else {
  console.log('please leave me alone.')
}
