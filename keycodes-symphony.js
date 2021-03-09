export const compose = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll("div").forEach( (elem) => elem.remove() );
    } else if (e.key === "Backspace") {
      const elems = document.querySelectorAll("div")
      elems[elems.length-1].remove()
    } else {
      const color = `rgb(${e.key.charCodeAt(0)}, ${e.key.charCodeAt(0)}, ${e.key.charCodeAt(0)})`
      const elem = document.createElement("div");
      elem.classList.add("note")
      elem.style.background = color
      document.body.appendChild(elem)
      elem.textContent = e.key
    }
  })
}