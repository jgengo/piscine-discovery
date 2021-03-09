



import { gossips } from './data.js'

const newOne = (gossip, first=false) => {
  const elem = document.createElement('div')
  elem.className = "gossip"
  elem.innerHTML = gossip
  if (first) {
    document.body.insertBefore(elem, document.querySelectorAll('.gossip')[1])
  } else {
    document.body.appendChild(elem)
  }
}

export const grid = () => {
//   Create 3 type="range" inputs with the class range, all wrapped in a div with the class ranges:

// one with id="width" that control the width of cards (from 200 to 800 pixels)
// one with id="fontSize" that control the font size (from 20 to 40 pixels)
// one with id="background" that control the background lightness (from 20% to 75%)

  const divRange = document.createElement('div')
  divRange.className = 'ranges'
  const widthRange = document.createElement('input')
  const fontRange = document.createElement('input')
  const backRange = document.createElement('input')
  
  widthRange.setAttribute('type', 'range')
  fontRange.setAttribute('type', 'range')
  backRange.setAttribute('type', 'range')
  widthRange.className = 'range'
  fontRange.className = 'range'
  backRange.className = 'range'

  widthRange.id = 'width'
  widthRange.value = ''
  widthRange.min = '200'
  widthRange.max = '800'

  fontRange.id = 'fontSize'
  fontRange.value = ''
  fontRange.min = '20'
  fontRange.max = '40'

  backRange.id = 'background'
  backRange.min = '20'
  backRange.max = '75'
  backRange.value = ''

  divRange.appendChild(widthRange)
  divRange.appendChild(fontRange)
  divRange.appendChild(backRange)
  document.body.appendChild(divRange)

  widthRange.addEventListener('input', function () {
    var gossips = document.querySelectorAll('.gossip')
    gossips.forEach( gossip => {
      gossip.style.width = width.value + 'px'
    })
  })

  fontRange.addEventListener('input', function () {
    var gossips = document.querySelectorAll('.gossip')
    gossips.forEach( gossip => {
      gossip.style.fontSize = fontRange.value + 'px'
    })
  })

  backRange.addEventListener('input', function () {
    var gossips = document.querySelectorAll('.gossip')
    gossips.forEach( gossip => {
      gossip.style.background = `hsl(280, 50%, ${backRange.value}%)`
    })
  })

  const firstGossip = document.createElement('form')
  firstGossip.className = 'gossip'
  const firstGossipText = document.createElement('textarea')
  firstGossipText.setAttribute("placeholder", "Got a gossip to share?")
  const firstGossipButton = document.createElement('button')
  firstGossipButton.innerHTML = "Share gossip!"
  
  firstGossip.appendChild(firstGossipText)
  firstGossip.appendChild(firstGossipButton)

  document.body.appendChild(firstGossip)

  gossips.forEach( gossip => newOne(gossip) )

  firstGossipButton.addEventListener('click', (e) => {
    newOne(firstGossipText.value, true)
    firstGossipText.value = ''
    e.preventDefault()
  });

}