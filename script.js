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

    var opacity = 0;

    for(let i = 0; i < squaresPerSide; i++) {
      const square = document.createElement("div");
      
      function getRandomColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
      };
      function styleSquare() {
        opacity < 1 ? opacity += 0.1 : opacity = 1;
        square.style.backgroundColor = getRandomColor();
        square.style.opacity = opacity;
      };
      square.classList.add("square");
      square.style = `height: ${squareSize}px; width: ${squareSize}px`;
      square.onmouseover = () => styleSquare();
      square.ontouchstart = () => styleSquare();
      line.appendChild(square);
    };
  };
});
