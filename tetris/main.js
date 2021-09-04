//Selectors
const boardElement = document.querySelector("#board");
const buttonSectionElement = document.querySelector("#button-section");


//Main

createBoard();

buttonSectionElement.addEventListener("click", movement);

setMarker();

