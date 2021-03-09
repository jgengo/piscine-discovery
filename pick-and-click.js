let screen = {x: 0, y: 0}

export const pick = () => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttributeNS(null, 'height', window.innerHeight)
  svg.setAttributeNS(null, 'width', window.innerWidth)



  const linex = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  linex.setAttributeNS(null, 'id', 'axisY')
  linex.setAttributeNS(null, 'x1', 0)
  linex.setAttributeNS(null, 'y1', 0)
  linex.setAttributeNS(null, 'x2', 0)
  linex.setAttributeNS(null, 'y2', 0)
  linex.style.stroke = "white"
  linex.style.strokeWidth = 1;

  const liney = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  liney.setAttributeNS(null, 'id', 'axisX')
  liney.setAttributeNS(null, 'x1', 0)
  liney.setAttributeNS(null, 'y1', 0)
  liney.setAttributeNS(null, 'x2', 0)
  liney.setAttributeNS(null, 'y2', 0)
  liney.style.stroke = "white"
  liney.style.strokeWidth = 1;

  svg.appendChild(liney)
  svg.appendChild(linex)

  const hsl = document.createElement('div')
  hsl.className = 'hsl'
  hsl.id = 'hsl'
  hsl.classList.add('text')
  hsl.innerHTML = `hsl(${screen.x}, 50%, ${screen.y}%)`;

  const hue = document.createElement("div")
  hue.className = "hue"
  hue.classList.add("text")
  hue.innerHTML = `hue<br />${screen.x}`

  const luminosity = document.createElement("div")
  luminosity.className = "luminosity"
  luminosity.classList.add("text")
  luminosity.innerHTML = `luminosity<br />${screen.y}`

  document.body.appendChild(hsl)
  document.body.appendChild(hue)
  document.body.appendChild(luminosity)
  document.body.appendChild(svg)

  addEventListener('mousemove', (e) => {
    screen.x = Math.round(e.clientX / window.innerWidth * 360);
    screen.y = Math.round(e.clientY / window.innerHeight * 100);
    
    let liney = document.getElementById('axisX')
    let linex = document.getElementById('axisY')

    linex.setAttributeNS(null, 'x1', 0)
    linex.setAttributeNS(null, 'y1', e.clientY)
    linex.setAttributeNS(null, 'x2', window.innerWidth)
    linex.setAttributeNS(null, 'y2', e.clientY)

    liney.setAttributeNS(null, 'x1', e.clientX)
    liney.setAttributeNS(null, 'y1', 0)
    liney.setAttributeNS(null, 'x2', e.clientX)
    liney.setAttributeNS(null, 'y2', window.innerHeight)

    console.log(`x: ${screen.x} ; y: ${screen.y}`);
    hsl.innerHTML = `hsl(${screen.x}, 50%, ${screen.y}%)`;
    hue.innerHTML = `hue<br />${screen.x}`
    luminosity.innerHTML = `luminosity<br />${screen.y}`

    document.body.style.background =  `hsl(${screen.x}, 50%, ${screen.y}%)`;
  });

  addEventListener('click', () => {
    let range = document.createRange();
    range.selectNode(document.getElementById("hsl"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect

  })
}