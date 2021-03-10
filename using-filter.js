const filterShortStateName = (arr) => arr.filter( e => e.length < 7 )
const filterStartVowel = (arr) => arr.filter ( e => ['a','e','i','o','u'].includes(e[0].toLowerCase()) )


const hasMoreThan4 = (elem) => {
  let x = 0
  for (const c of elem) {
    if (['a','e','i','o','u'].includes(c))
      x++
    if (x > 4) return true
  }
  return false
}

const filter5Vowels = (arr) => arr.filter( (elem) => hasMoreThan4(elem) )

const filter01 = (elem) => {
  let voyels = ['a','e','i','o','u']
  let ret = false
  
  for (const c of elem.toLowerCase()) {
    if (voyels.includes(c)) {
      if (ret == true)
        return false
      
      ret = true
      voyels.splice(voyels.indexOf(c), 1)
    }
  }

  return ret
}

const filter1DistinctVowel = (arr) => arr.filter( (elem) => filter01(elem) )

const multiFilter = (obj) => {
  obj = obj.filter( (elem) => elem.capital.length >= 8 )
  obj = obj.filter( (elem) => { return !(['a','e','i','o','u'].includes(elem.name[0].toLowerCase())) })
  obj = obj.filter( (elem) => {
    for ( const c of elem.tag.toLowerCase() ) {
      if (['a','e','i','o','u'].includes(c))
        return true
    }
    return false
  })
  return obj.filter( (elem) => elem.region != 'South')
}