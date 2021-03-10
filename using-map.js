const citiesOnly = (obj) => {
  return obj.map( (o) => o.city )
}

const capitalize = (e) => {
  return e.split(' ').map( word => `${word.substring(0,1).toUpperCase()}${word.substring(1)}`).join(' ')
}

const upperCasingStates = (arr) => {
  return arr.map( e => {
    return capitalize(e)
  })
}

const fahrenheitToCelsius = (arr) => {
  return arr.map( e => {
    return `${Math.floor(( parseInt(e.replace('°F', '')) - 32) * 5/9)}°C`
  })
}


const trimTemp = (obj) => {
  return obj.map( elem => {
    elem.temperature = elem.temperature.replace(/\s/g, "");
    return elem
  })
}

const tempForecasts = (obj) => {
  obj = trimTemp(obj)
  return obj.map ( o => {
    return `${Math.floor(( parseInt(o.temperature.replace('°F', '')) - 32) * 5/9)}°Celsius in ${capitalize(o.city)}, ${capitalize(o.state)}`
  })

}