//Functions

const createBoard = (rows, columns) => {

    //*Table section
    //--Create table
    const newTable = document.createElement("table");
    newTable.id = "table";


    //--Create table cells

    for (let i = 0; i < rows; i++) {

        let iText = String(i);

        //--Create table row
        let newRow = document.createElement("tr");

        for (let j = 0; j < columns; j++) {

            let jText = String(j);

            //--Create table cells
            let newCell = document.createElement("td");
            let id = iText.concat(jText);

            newCell.innerText = id;
            newCell.id = id;

            newRow.appendChild(newCell);

        }
        newTable.appendChild(newRow);
    }
    boardElement.appendChild(newTable);


    //-*End table section

    /*  //*Button Section
     
     //--Left button create
     const leftButton = document.createElement("button");
     leftButton.id = "left-button";
     leftButton.innerText = "Left";
     //--Down button create
     const downButton = document.createElement("button");
     downButton.id = "down-button";
     downButton.innerText = "Down";
     //--Right button create
     const rightButton = document.createElement("button");
     rightButton.id = "right-button";
     rightButton.innerText = "Right";
 
     //--Button and section appends
     boardElement.appendChild(buttonSection);
     buttonSection.appendChild(rightButton);
     buttonSection.appendChild(downButton);
     buttonSection.appendChild(leftButton);
 
     //-*End Button section */

}

const squareGenerator = (tableEl) => {
    //Set marker length
    markerLocation.markerLength = 4;

    let startRow = markerLocation.start.row;
    let startColumn = markerLocation.start.column;



    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            tableEl.children[startRow + i].children[startColumn + j].innerText = "X";
            tableEl.children[startRow + i].children[startColumn + j].classList.add("marked");


        }
    }
}
const generateObject = (chosenObject, tableEl) => {
    console.log(chosenObject);



    switch (chosenObject) {

        case "square":
            squareGenerator(tableEl);


            break;

        default:
            console.log("No object");

    }

}

const resetMarker = () => {

    const rowStart = markerLocation.start.row;
    const columnStart = markerLocation.start.column;

    const tableEl = boardElement.children[0];
    const targetEl = tableEl.children[rowStart];

    //Sets marker to mid of board

    targetEl.children[columnStart].innerText = "X";
    targetEl.children[columnStart].classList.add("marked");

    console.log("Running resetMarker()");

    generateObject("square", tableEl);


    console.log("Running resetMarker()");
}


const lowerRows = (row, colMax, tableElement) => {
    console.log("Run lower rows");
    row--;
    for (let i = row; i >= 0; i--) {
        for (let j = 0; j <= colMax; j++) {
            console.log("row" + i);
            console.log("column" + j);

            if (tableElement.children[i].children[j].className === "bottom-limit") {
                tableElement.children[i].children[j].className = "";
                tableElement.children[i].children[j].innerText = "";
                tableElement.children[i + 1].children[j].className = "bottom-limit";
                tableElement.children[i + 1].children[j].innerText = "O";
                console.log("FOUND IT");
            }



        }
    }

}

const isRowCompleted = (tableElement) => {

    const colMax = limits.right;
    const row = markerLocation.current.row;

    let counter = 0;

    for (let j = 0; j <= colMax; j++) {
        console.log(colMax);
        console.log(counter);

        if (tableElement.children[row].children[j].className === "bottom-limit") {
            console.log("Check: " + (j + 1));
            counter++;
            if ((counter - 1) === colMax) {
                console.log("ROW COMPLETED");
                for (j = 0; j <= colMax; j++) {
                    tableElement.children[row].children[j].className = "";
                    tableElement.children[row].children[j].innerText = "";
                }
                lowerRows(row, colMax, tableElement);

            }
        }
    }

}

const moveMarkers = () => {

}

const isMovePossible = (tableElement, direction, positions, i) => {

    let elementClass = tableElement.children[positions.nextRow].children[positions.nextColumn].className;

    switch (direction) {

        case "left-button":

            break;

        case "down-button":

            if (positions.row === 0 || elementClass === "bottom-limit") {
                console.log("Abort down");

            } else {
                console.log("Marker is OK - Continue check");
            }

            break;

        case "right-button":

            break;

        default:
            console.log("Nothing pressed");
            return false;
    }

}

const moveOnDirection = (direction, markerMovement) => {
  
    if (direction === "left-button") {
        markerMovement.row = 0;
        markerMovement.column = -1;
    } if (direction === "down-button") {
        markerMovement.row = 1;
        markerMovement.column = 0;
    } else if (direction === "right-button") {
        markerMovement.row = 0;
        markerMovement.column = 1;
      
    }

}

const adjustMarker = (direction, tableElement) => {


    console.log("So... is Move possible?");
    console.log(tableElement.children[1].children[1].id);

    let markerLength = markerLocation.rows.length;

    let positions = {
        row: 0,
        column: 0,
        nextRow: 0,
        nextColumn: 0
    };

    let markerMovement = {
        row: 0,
        column: 0
    }

    moveOnDirection(direction, markerMovement);

    console.log("ROW MOVEMENT: " + markerMovement.row);
    console.log("COLUMN MOVEMENT: " + markerMovement.column);

    for (let i = 0; i < markerLength; i++) {

        positions.row = markerLocation.rows[i];
        positions.column = markerLocation.columns[i];

        positions.nextRow = positions.row + markerMovement.row;
        positions.nextColumn = positions.column + columnMovement.column;

        console.log("NextRow: " + positions.nextRow);
        console.log("NextColumn: " + positions.nextColumn);

        let currentMarkerLoc = tableElement.children[positions.row].children[positions.column].id;
        let nextMarkerLoc = tableElement.children[positions.nextRow].children[positions.nextColumn].id;

        console.log("Current Marker Loc: " + currentMarkerLoc);
        console.log("Next Marker Loc: " + nextMarkerLoc);

        //conditional
        isMovePossible(tableElement, direction, positions, i);

    }



    return false;

}

const markerScanner = (tableElement) => {

    let rowLength = tableElement.children.length;
    let columnLength = tableElement.children[1].children.length

    markerLocation.rows = [];
    markerLocation.columns = [];

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < columnLength; j++) {
            if (tableElement.children[i].children[j].className === "marked") {
                console.log("WE MARKED");
                markerLocation.rows = [...markerLocation.rows, i];
                markerLocation.columns = [...markerLocation.columns, j];
            }
        }
    }
    console.log(markerLocation.rows);
    console.log(markerLocation.columns);
}

//Inside:
//--getMarkerLocation
//--adjustMarker
const movementManager = (e) => {

    const tableElement = e.target.parentNode.parentNode.children[0].children[0];

    //console.log("Inside Movement - Marker location: " + markerLocation.markerString());

    if (touchBottomLimit === false) {

        markerScanner(tableElement);
        touchBottomLimit = adjustMarker(e.target.id, tableElement);


    } else if (touchBottomLimit === true) {

        resetMarker();
        console.log("Touch bottom true (new Marker loc): " + markerLocation.markerString());
        touchBottomLimit = false;
    }





}