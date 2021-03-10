const triangle = (c, n) => {
  let res =''
  for (let i = 1; i <= n; i++) {
    res += `${c.repeat(i)}\n`
  }

  return res.slice(0, -1)
}