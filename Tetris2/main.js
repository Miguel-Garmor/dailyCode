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
    id: "marker"
}

let objectContainer = {

    rows: [],
    columns: [],
    //set at object generator
    markerLength: 0,
    id: "objectContainer",
    originalPosition: true,
    originalPositionStart: true
    
}

let limits = {
    left: 0,
    bottom: 0,
    right: 0
}

let boardValues = {
    rows: 20,
    columns: 10
}

let shapes;

//GLOBAL VARIABLES

let touchBottomLimit = false;
let clearedRows = [];

//INITIALIZATIONS

limits.right = boardValues.columns - 1;
limits.bottom = boardValues.rows - 1;
markerLocation.start.column = parseInt(boardValues.columns / 2);

//EVENT LISTENERS
buttonSectionElement.addEventListener("click", movementManager);

//MAIN

createBoard(boardValues.rows, boardValues.columns);

resetMarker();