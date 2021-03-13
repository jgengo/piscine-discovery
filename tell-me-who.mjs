import { readdirSync } from 'fs';


const capitalize = (str) => { return `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`}

const path = process.argv[2]



try {
  const files = readdirSync(path);
  let names = files.map ( (file) => { 
    const name = file.slice(0, -5).split('_')

    return `${capitalize(name[1])} ${capitalize(name[0])}`
  }).sort()

  names = names.map ( (el, i) => `${i+1}. ${el}` )
  console.log(names.join("\n"))
      
} catch (err) {
  console.error(err);
}