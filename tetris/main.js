//Selectors
const boardElement = document.querySelector("#board");
const buttonSectionElement = document.querySelector("#button-section");


//Global variables
let markerLocation = {
    current: {
        row: 0,
        column: 0
    },
    start: {
        row: 0,
        column: 3
    },
    markerString: function(){
        return `${markerLocation.current.row}${markerLocation.current.column}`;
    }
}

let limits = {
    left: 0,
    right: 6,
    hardBottom: 9
}
let touchBottomLimit = false;
//Event listeners

buttonSectionElement.addEventListener("click", movement);

//Main

createBoard(10, 7); //Why doesn't it work if I change the row size?

/* //--Row + column length reference
const rows = boardElement.children[0].children.length;
const columns = boardElement.children[0].children[0].children.length;
 */
resetMarker();