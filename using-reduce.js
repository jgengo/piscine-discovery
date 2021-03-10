const adder = (arr, x=0) => arr.reduce( (sum, curr) => { return sum + curr}, x)

// sumOrMul that receives an array and adds or multiplies its elements 
// depending on whether the element is an odd or an even number.

const sumOrMul = (arr, x=0) => {
  return arr.reduce( (sum, curr) => {
    if (curr % 2 == 0) return sum * curr
    else return sum + curr
  }, x)
}

const funcExec = (func, x) => func.reduce( (sum, current) => { return current(sum); }, x)

