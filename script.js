const newGridButton = document.querySelector("#new-grid-button");
const mainContainer = document.querySelector('#main-container');

newGridButton.addEventListener("click", () => {
  let squaresPerSide = Number(prompt("Number of squares per side? (max: 100)"));

  if (isNaN(squaresPerSide) || squaresPerSide > 100 || squaresPerSide <= 0) {
    return alert(`The chosen value is not a valid number. Please, try again.`);
  };

  const previousGridContainer = document.querySelector("#grid-container");
  previousGridContainer?.remove();
  
  const gridContainer = document.createElement("div");
  gridContainer.id = "grid-container";
  mainContainer.appendChild(gridContainer);

  let squareSize = 500/squaresPerSide;

  for(let i = 0; i < squaresPerSide; i++) {
    const line = document.createElement("div");
    line.classList.add("line")
    gridContainer.appendChild(line);

    for(let i = 0; i < squaresPerSide; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style = `height: ${squareSize}px; width: ${squareSize}px`;
      square.onmouseover = () => square.classList.add("colored-square");
      line.appendChild(square);
    };
  };
});
