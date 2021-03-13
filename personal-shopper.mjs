import { readFileSync, writeFileSync, rmSync } from 'fs'

const createFile = (file, obj={}) => {
  writeFileSync(file, JSON.stringify(obj))
}

const deleteFile = (file) => {
  rmSync(file)
}

const getElems = (file) => {
  return JSON.parse(readFileSync(file))
}

const addElem = (elem, amount) => {
  const obj = getElems(file)
  obj[elem] = (obj[elem] || 0) + amount
  if (obj[elem] <= 0) {
    delete obj[elem]
  }
  
  createFile(file, obj)
}

const delElem = (elem, amount) => {
  const obj = getElems(file)
  obj[elem] = (obj[elem] || 0) - amount
  if (obj[elem] <= 0) {
    delete obj[elem]
  }

  createFile(file, obj)
}

const lsFile = (file) => {
  const elems = getElems(file)

  if (Object.keys(elems).length === 0 && elems.constructor === Object) {
    console.log('Empty list.')
    return 
  }
  for (const el in elems) console.log(`- ${el} (${elems[el]})`)
}

const file = process.argv[2]

if (process.argv[3] == 'create') createFile(process.argv[2])
else if (process.argv[3] == 'delete') deleteFile(process.argv[2])
else if (process.argv[3] == 'add') {
  if (process.argv.length == 4) {
    console.error("No elem specified.");
  } else {
    const amount = isNaN(process.argv[5]) ? 1 : parseInt(process.argv[5])
    addElem(process.argv[4], amount)
  }
}
else if (process.argv[3] == 'rm') {
  if (process.argv.length == 4) {
    console.error("No elem specified.");
  } else {
    const amount = isNaN(process.argv[5]) ? Infinity : parseInt(process.argv[5])
    delElem(process.argv[4], amount)
  }
}
else if (process.argv[3] == 'ls') {
  lsFile(file)
} else {
  console.log(`
Commands:
  - create: takes a filename as argument and create it (should have \`.json\` extension specified)
  - delete: takes a filename as argument and delete it
  - add: ...
  - rm: ...
  - ls: ...
  - help: ...
  `)
}