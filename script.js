const newGridButton = document.querySelector("#new-grid-button");
const mainContainer = document.querySelector('#main-container');

alert("Aperte o play para começar o jogo!");

newGridButton.addEventListener("click", () => {
  let squaresPerSide = Number(prompt("Quantos quadrados você quer em cada lado? Digite um número entre 1 e 100."));

  if (isNaN(squaresPerSide) || squaresPerSide > 100 || squaresPerSide <= 0) {
    return alert("Valor inválido. Por favor, tente novamente.");
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
      square.ontouchstart = () => square.classList.add("colored-square");
      line.appendChild(square);
    };
  };
});
