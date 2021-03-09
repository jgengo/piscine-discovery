const split = (str, elem) => {
  let elemSize = elem.length
  let arr = []
  for (let i = 0; i < str.length - elemSize+1; i++) {
      if (str.slice(i,i+elemSize) == elem) {
          arr.push(str.slice(0, i))
          str = str.slice(i + elemSize)
          i = 0
      }
  }
  arr.push(str)
  return arr
}

const join = (arr, str) => {
  let res = ''
  for (let i in arr) {
    if (arr[i] !== '')
      res += arr[i] + (i == arr.length-1 ? '' : str )
  }
  return res
}