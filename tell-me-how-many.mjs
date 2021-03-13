import { readdirSync } from 'fs';

const path = process.argv[2]

try {
  const files = readdirSync(path);
  console.log(files.length)
  // for await (const file of files)
  //     count++
} catch (err) {
  console.error(err);
}