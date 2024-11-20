const mainContainer = document.querySelector("#main-container")

for(let i = 0; i < 16; i++) {
  const line = document.createElement("div")
  line.style = "display: flex; justify-content: center"
  mainContainer.appendChild(line)

  for(let i = 0; i < 16; i++) {
    const square = document.createElement("div")
    square.classList.add("square")
    square.onmouseover = () => square.classList.add("colored-square");
    line.appendChild(square)
  }
}