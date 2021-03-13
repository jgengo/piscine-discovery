import * as fs from 'fs'

// functions
const createFile = (obj={}) => fs.writeFileSync(shopFile, JSON.stringify(obj))
const readFile = (file) => JSON.parse(fs.readFileSync(shopFile, 'utf8'))
const checkFileExist = (file) => { if (!fs.existsSync(file)) createFile() }

const processFiles = (dir, obj={}) => {
  try {
    const files = readdirSync(dir)
    
    let names = files.map ( (file) => { 
      const o = JSON.parse(readFileSync(`${path}/${file}`, 'utf8'))
  
      if (o.answer === 'yes') {
        // const name = file.slice(0, -5).split('_')
        // return `${capitalize(name[1])} ${capitalize(name[0])}`
      
      
      
      }  
    }).sort()
  
    // names = names.filter( (el) => el !== undefined )
    // names = names.map ( (el, i) => `${i+1}. ${el}` )
    // writeFileSync('vip.txt', names.join("\n"))
  } catch (err) {
    console.error(err);
  }
}


// main
const args = process.argv.slice(2)
if (args.length >= 2) {
  const shopFile = args[1]
  const folderGuest = args[0]

  checkFileExist(shopFile)
  const obj = readFile(shopFile)
  processFiles(folderGuest, obj)


}


