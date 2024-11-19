const mainContainer = document.querySelector("#main-container")


for(var i = 0; i < 256; i++) {
  const line = document.createElement("div")
  line.style = "background-color: green; border-style: solid; height: 20px; width: 20px"
  mainContainer.appendChild(line)
}