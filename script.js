const mainContainer = document.querySelector("#main-container")

for(var i = 0; i < 256; i++) {
  const square = document.createElement("div")
  square.classList.add("square")
  square.onmouseover = () => square.classList.add("colored-square");
  mainContainer.appendChild(square)
}