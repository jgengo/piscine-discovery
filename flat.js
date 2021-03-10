const flatten = (arr, target, n) => {
  if (n == 0) { 
    target.push(arr)
    return
  }
  arr.forEach(function (el) {
      if (Array.isArray(el)) flatten(el, target, n-1)
      else target.push(el)
  })
}

const flat = (arr, n=1) => {
  const flattened = []
  flatten(arr, flattened, n+1)
  return flattened
}