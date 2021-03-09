const reverse = (str) => {
  let res = []
  
  for (let i = 0; str.length != 0; i++) {
    res.push(str[str.length-1])
    str = str.slice(0, -1)
  }

  return typeof(str) === "string" ? res.join("") : res
}