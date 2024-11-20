const mainContainer = document.querySelector("#main-container")
const size = 760/16

for(let i = 0; i < 16; i++) {
  const line = document.createElement("div")
  line.style = "display: flex; justify-content: center"
  mainContainer.appendChild(line)

  for(let i = 0; i < 16; i++) {
    const square = document.createElement("div")
    square.classList.add("square")
    square.style = `height: ${size}px; width: ${size}px`
    square.onmouseover = () => square.classList.add("colored-square");
    line.appendChild(square)
  }
}