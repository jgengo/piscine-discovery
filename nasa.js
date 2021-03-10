const nasa = (n) => {
  let ret = ''

  for (let i = 1; i <= n; i++)
  {
    if (i % 3 == 0 && i % 5 == 0) {
      ret += 'NASA '
    } else if (i % 5 == 0) {
      ret += 'SA '
    } else if (i % 3 == 0) {
      ret += 'NA '
    } else {
      ret += `${i} `
    }
  }
  
  return ret.slice(0, ret.length-1);
}