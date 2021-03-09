let circle;
let circleInfo = {x: 0, y: 0, hasEntered: false};

const isIn = (e) => {
  const box = document.body.getElementsByClassName("box")[0];
  const leftBorder = box.getBoundingClientRect().left + 25
  const rightBorder = box.getBoundingClientRect().right - 25
  const topBorder = box.getBoundingClientRect().top + 25
  const bottomBorder = box.getBoundingClientRect().bottom - 25
  if (e.clientX >= leftBorder && 
      e.clientY >= topBorder && 
      e.clientX <= rightBorder && 
      e.clientY <= bottomBorder) {
    return true
  } else {
    return false
  }
}

export const createCircle = () => {
  addEventListener("click", (e) => {
    circle = document.createElement("div")
    circle.className = "circle"
    
    circle.style.left = circleInfo.x
    circle.style.top = circleInfo.y
    
    circle.style.background = isIn(e) ? "var(--purple)" : "white"    
    circleInfo.hasEntered = false
    document.body.appendChild(circle)
  })
}

export const moveCircle = () => {
    document.addEventListener("mousemove", (e) => {      
      document.querySelectorAll(".unstagedCircle").forEach((elem) => elem.remove())
    
      circleInfo.x = e.clientX - 25 + "px";
      circleInfo.y = e.clientY - 25 + "px";

      let circle = document.createElement("div")

      circle.className = "circle"
      circle.classList.add("unstagedCircle")
      circle.style.background = circleInfo.hasEntered ? 'var(--purple)' : 'white';

      circle.style.left = e.clientX - 25 + "px"
      circle.style.top = e.clientY - 25 + "px"

      document.body.appendChild(circle)
      if (isIn(e)) {
        document.querySelector(".circle").style.background = 'var(--purple)'
        circleInfo.hasEntered = true
      }

      if (circleInfo.hasEntered) {
          const box = document.getElementsByClassName('box')[0]
          if (e.clientX - 25 < box.getBoundingClientRect().left) {
            circle.style.left = box.getBoundingClientRect().left + "px"
            circleInfo.x = box.getBoundingClientRect().left + "px"
            document.querySelector(".circle").style.background = 'var(--purple)'
          }
          if (e.clientX + 25 > box.getBoundingClientRect().right) {
              circle.style.left = box.getBoundingClientRect().right - 50 + "px"
              circleInfo.x = box.getBoundingClientRect().right - 50 + "px"
              document.querySelector(".circle").style.background = 'var(--purple)'
          }
          if (e.clientY - 25 < box.getBoundingClientRect().top) {
              circle.style.top = box.getBoundingClientRect().top + "px"
              circleInfo.y = box.getBoundingClientRect().top + "px"
              document.querySelector(".circle").style.background = 'var(--purple)'
          }
          if (e.clientY + 25 > box.getBoundingClientRect().bottom) {
              circle.style.top = box.getBoundingClientRect().bottom - 50 + "px"
              circleInfo.y = box.getBoundingClientRect().bottom - 50 + "px"
              document.querySelector(".circle").style.background = 'var(--purple)'
          }
        }
  })
}

export const setBox = () => {
    const box = document.createElement("div")
    box.className = "box"
    document.body.appendChild(box)
    box.getBoundingClientRect().bottom
}
