const pyramid = (c, n) => {
  let res = ''

  for (let i = 1; i <= n; i++)
    res += ' '.repeat(n - i).repeat(c.length) + '' + c.repeat(i * 2 - 1) + "\n"

  return res.slice(0, -1)
}

console.log(pyramid('{}', 15))