const newGridButton = document.querySelector("#new-grid-button");
const mainContainer = document.querySelector('#main-container');

newGridButton.addEventListener("click", () => {
  let squaresPerSide = Number(prompt("Number of squares per side? (max: 100)"));

  if (isNaN(squaresPerSide)) {
    return alert(`The chosen value is not a number. Please, try again.`);
  };
  
  if (squaresPerSide > 100) {
    return alert(`The chosen value is not under 100. Please, try again.`);
  };

  const previousGridContainer = document.querySelector("#grid-container");
  previousGridContainer?.remove();
  
  const gridContainer = document.createElement("div");
  gridContainer.id = "grid-container";
  mainContainer.appendChild(gridContainer);

  let size = 500/squaresPerSide;

  for(let i = 0; i < squaresPerSide; i++) {
    const line = document.createElement("div");
    line.classList.add("line")
    line.style = "display: flex; justify-content: center";
    gridContainer.appendChild(line);

    for(let i = 0; i < squaresPerSide; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style = `height: ${size}px; width: ${size}px`;
      square.onmouseover = () => square.classList.add("colored-square");
      line.appendChild(square);
    };
  };
});
