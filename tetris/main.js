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
        column: 0
    },
    markerString: function () {
        return `${markerLocation.current.row}${markerLocation.current.column}`;
    }
}

let limits = {
    left: 0,
    right: 0,
    hardBottom: 0
}

let boardValues = {
    rows: 5,
    columns: 5
}

let touchBottomLimit = false;

//Value initializations
limits.hardBottom = boardValues.rows - 1;
limits.right = boardValues.columns - 1;

markerLocation.start.column = (boardValues.columns - 1) / 2;
//Event listeners

buttonSectionElement.addEventListener("click", movement);

//Main

createBoard(boardValues.rows, boardValues.columns); //Why doesn't it work if I change the row size?

/* //--Row + column length reference
const rows = boardElement.children[0].children.length;
const columns = boardElement.children[0].children[0].children.length;
 */
resetMarker();