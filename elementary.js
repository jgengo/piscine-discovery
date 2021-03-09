const multiply = (a, b) => {
  let result = 0;

  if (a > 0 && b < 0)
    b = [a, a = b][0];


  for (let i = 0; i < Math.abs(b); i++) {
    result += a;
  }

  return Math.sign(b) === -1 ? -result : result;
}


const divide = (a, b) => {
  let flag = false;
  let divide = 0;

  if (a < 0 && b < 0) {
    a = -a
    b = -b
  }

  if (a < 0) {
    a = -a
    flag = true
  }
  if (b < 0) {
    b = -b
    flag = true
  }
  
  let result = a;
  
  while (result > b) {
    result -= b
    divide++;
  }

  return flag ? -divide : divide
}

const modulo = (a, b) => {
  let flag = false
  
  if (a < 0) {
      a = -a
      flag = true
  }
  if (b < 0) {
      b = -b
  }
  
  let result = a
  let tmp = b
  
  while (b < result) {
      result = result - tmp
  }

  return flag ? -result : result
}
