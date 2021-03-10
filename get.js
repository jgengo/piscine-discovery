
const get = (src, path) => {
  const splitted = path.split('.')
  let tmp = src
  
  splitted.forEach( path => {
      if (tmp === undefined) return tmp
      tmp = tmp[path]
  })
  
  return tmp
}