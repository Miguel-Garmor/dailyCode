//Selectors
const boardElement = document.querySelector("#board");
const buttonSectionElement = document.querySelector("#button-section");


//Global variables
let markerLocation;
let touchBottomLimit = false;
//Event listeners

markerLocation = buttonSectionElement.addEventListener("click", movement);

//Main

createBoard(10, 7);

/* //--Row + column length reference
const rows = boardElement.children[0].children.length;
const columns = boardElement.children[0].children[0].children.length;
 */
markerLocation = resetMarker();