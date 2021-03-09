import { places } from './where-do-we-go.data.js'
// import { places } from './data.js'

const fileName = (place) => {
  const city = place.split(',')[0].toLowerCase()
  return city.replaceAll(' ', '-')
}

const getDegree = coordinates => {
  const north = coordinates.includes('N')
  const degree = coordinates.split("'")[0].replace('°', '.')
  return north ? degree : -degree
}

const sortedPlaces = places.sort(
  (a, b) => getDegree(b.coordinates) - getDegree(a.coordinates),
)

// sort the places from the Northest to the Southest
export const explore = () => {
  const places = sortedPlaces
  let previousY = 0

  places.forEach( (place) => {
    const filename = fileName(place.name)
    
    const section = document.createElement('section')
    section.style.backgroundSize = "100%"
    section.style.background = `url(./where-do-we-go_images/${filename}.jpg`
    
    document.body.appendChild(section)
  })

  const place = places[0]
  const location = document.createElement('a')
  location.className = 'location'
  location.innerHTML = `${place.name}\n${place.coordinates}`
  location.style.color = place.color
  location.setAttribute('target', '_blank')
  location.href = `https://www.google.com/maps/place/${places[0].coordinates}`
  document.body.appendChild(location)

  const direction = document.createElement('div')
  direction.innerHTML = ""
  direction.className = 'direction'
  document.body.appendChild(direction)


  document.addEventListener('scroll', () => {
    const win = window.innerHeight
    const page = Math.floor((window.pageYOffset + (win/2)) / win)
    
    direction.innerHTML = window.pageYOffset > previousY ? "S" : "N"
    previousY = window.pageYOffset;

    location.innerHTML = `${places[page].name}\n${places[page].coordinates}`
    location.style.color = places[page].color
    location.href = `https://www.google.com/maps/place/${places[page].coordinates}`
  })
  
  

}