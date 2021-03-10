const filterShortStateName = (arr) => arr.filter( e => e.length <= 4 )
const filterStartVowel = (arr) => arr.filter ( e => ['a','e','i','o','u'].includes(e[0].toLowerCase()) )

const filter5Vowels = (arr) => {
  return arr.filter( (elem) => {
    let x = 0
    for (c of elem) {
      if (['a','e','i','o','u'].includes(c))
        x++
      if (x > 4) return true
    }
    return false
  })
}
