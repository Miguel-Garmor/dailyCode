//Selectors
const boardElement = document.querySelector("#board");
const buttonSectionElement = document.querySelector("#button-section");


//Experimental variables



//OBJECTS

let markerLocation = {
    markerLength: 0,

    positionArray: [],

    rows: [],
    columns: [],

    start: {
        row: 0,
        column: 0
    },
    markerString: function () {
        return `${markerLocation.row}${markerLocation.column}`;
    }
}

let limits = {
    left: 0,
    right: 0
}

let boardValues = {
    rows: 5,
    columns: 5
}

//GLOBAL VARIABLES

let touchBottomLimit = false;

//INITIALIZATIONS

limits.right = boardValues.columns - 1;
markerLocation.start.column = parseInt(boardValues.columns / 2);

//EVENT LISTENERS
buttonSectionElement.addEventListener("click", movementManager);

//MAIN

createBoard(boardValues.rows, boardValues.columns);

resetMarker();