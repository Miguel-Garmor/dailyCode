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
            if (tableEl.children[startRow + i].children[startColumn + j].className === "bottom-limit") {
                console.log("Abort SQUARE GEN - in squareGenerator");
                return true;
            } else {
                tableEl.children[startRow + i].children[startColumn + j].innerText = "X";
                tableEl.children[startRow + i].children[startColumn + j].classList.add("marked");

            }

        }
    }
    return false;
}
const line3Generator = (tableEl) => {
    //Set marker length
    markerLocation.markerLength = 3;

    let startRow = markerLocation.start.row;
    let startColumn = markerLocation.start.column;



    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 1; j++) {
            if (tableEl.children[startRow + i].children[startColumn + j].className === "bottom-limit") {
                console.log("Abort line3 GEN - in squareGenerator");
                return true;
            } else {
                tableEl.children[startRow + i].children[startColumn + j].innerText = "X";
                tableEl.children[startRow + i].children[startColumn + j].classList.add("marked");

            }

        }
    }
    return false;
}

const snakeGenerator = (tableEl) => {
    //Set marker length
    markerLocation.markerLength = 4;

    let startRow = markerLocation.start.row;
    let startColumn = markerLocation.start.column;



    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            if (tableEl.children[startRow + i].children[startColumn + j - 1].className === "bottom-limit") {
                console.log("Abort snake3 GEN - in squareGenerator");
                return true;
            } else if (i === 0 && j === 2 || i === 1 && j === 0) {
                console.log("BLANK");
            } else {
                tableEl.children[startRow + i].children[startColumn + j - 1].innerText = "X";
                tableEl.children[startRow + i].children[startColumn + j - 1].classList.add("marked");
            }

        }
    }
    return false;
}
const generateObject = (chosenObject, tableEl) => {

    let check = false;
    switch (chosenObject) {

        case "square":
            console.log("Inside square");
            check = squareGenerator(tableEl);

            if (check === true) {
                console.log("Abort SQUARE GEN - in generateObject");
                return true;
            }
            break;

        case "line3":
            console.log("Inside line3");
            check = line3Generator(tableEl);
            if (check === true) {
                console.log("Abort LINE3 GEN - in generateObject");
                return true;
            }
            break;

        case "snake":
            console.log("Inside snake");
            check = snakeGenerator(tableEl);
            if (check === true) {
                console.log("Abort SNAKE GEN - in generateObject");
                return true;
            }
            break;

        default:
            console.log("No object");

    }

}

const restartGame = (tableEl) => {

    let boardRows = boardValues.rows;
    let boardColumns = boardValues.columns;

    for (let i = 0; i < boardRows; i++) {
        for (let j = 0; j < boardColumns; j++) {
            let string1 = i.toString();
            let string2 = j.toString();

            let idString = string1.concat(string2);

            tableEl.children[i].children[j].innerText = idString;
            tableEl.children[i].children[j].className = "";
        }
    }

}

const resetMarker = () => {

    let check = false;

    const rowStart = markerLocation.start.row;
    const columnStart = markerLocation.start.column;

    const tableEl = boardElement.children[0];
    const targetEl = tableEl.children[rowStart];

    //Sets marker to mid of board

    targetEl.children[columnStart].innerText = "X";
    targetEl.children[columnStart].classList.add("marked");

    check = generateObject("snake", tableEl);

    if (check === true) {
        console.log("Abort SQUARE GEN in resetMarker");
        //Clear all information in cells
        restartGame(tableEl);
        //Run resetMarker();
        resetMarker();
    }
    console.log("Finish resetMarker");
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





const performMovement = (tableElement, markerMovement) => {
    console.log("Perform movement");

    let row = markerLocation.rows;
    let column = markerLocation.columns;

    let length = markerLocation.markerLength;


    //delete old markers
    for (let i = 0; i < length; i++) {
        tableElement.children[row[i]].children[column[i]].className = "";
        tableElement.children[row[i]].children[column[i]].innerText = tableElement.children[row[i]].children[column[i]].id;
    }

    //change marker position
    for (let i = 0; i < length; i++) {
        row[i] += markerMovement.row;
        column[i] += markerMovement.column;
        /* //Checks
        console.log("ROW Marker location " + i + ": " + markerLocation.rows[i]);
        console.log("COLUMN Marker location " + i + ": " + markerLocation.columns[i]); */
    }

    //add new markers
    for (let i = 0; i < length; i++) {
        tableElement.children[row[i]].children[column[i]].className = "marked";
        tableElement.children[row[i]].children[column[i]].innerText = "X";
    }
}

const clearMarkers = (tableElement, rows, columns) => {
    for (let i = 0; i < markerLocation.markerLength; i++) {
        tableElement.children[rows[i]].children[columns[i]].className = "bottom-limit";
        tableElement.children[rows[i]].children[columns[i]].innerText = "O";
    }
}

const isMovePossible = (tableElement, direction, positions, i) => {

    let elementClass;
    let rows = markerLocation.rows;
    let columns = markerLocation.columns;

    if (tableElement.children[positions.nextRow] === undefined) {
        elementClass = tableElement.children[positions.row].children[positions.column].className;
    } else if (tableElement.children[positions.nextRow].children[positions.nextColumn] === undefined) {
        elementClass = "edge-limit";
    } else {
        elementClass = tableElement.children[positions.nextRow].children[positions.nextColumn].className;
    }


    switch (direction) {

        case "left-button":

            if (positions.column === limits.left || elementClass === "bottom-limit" || elementClass === "edge-limit") {
                console.log("ABORT LEFT");
                return 2;
            } else {
                console.log("Marker is OK - Continue check");
                return 1;
            }

            break;

        case "down-button":
            console.log("Positions ROW: " + positions.row);

            if (positions.row === limits.bottom || elementClass === "bottom-limit") {
                console.log("Set bottom-limit");
                if (positions.row === limits.bottom) {
                    //Set current cell as bottom limit
                    //Send signal to resetMarker()
                    console.log("Touched bottom");
                } else if (elementClass === "bottom-limit") {
                    //Set current cell as bottom limit
                    //Send signal to resetMarker()
                    console.log("Touched limit");
                }

                clearMarkers(tableElement, rows, columns);

            } else {
                console.log("Marker is OK - Continue check");
                return 1;
            }

            break;

        case "right-button":

            if (positions.column === limits.right || elementClass === "bottom-limit" || elementClass === "edge-limit") {
                console.log("ABORT RIGHT");
                return 2;
            } else {
                console.log("Marker is OK - Continue check");
                return 1;
            }

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


    let counter = 0;

    let check = 0;

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
    /* //Check
        console.log("ROW MOVEMENT: " + markerMovement.row);
        console.log("COLUMN MOVEMENT: " + markerMovement.column); */


    for (let i = 0; i < markerLength; i++) {

        positions.row = markerLocation.rows[i];
        positions.column = markerLocation.columns[i];

        positions.nextRow = positions.row + markerMovement.row;
        positions.nextColumn = positions.column + markerMovement.column;

        /* //Checks
        console.log("NextRow: " + positions.nextRow);
        console.log("NextColumn: " + positions.nextColumn);
        let currentMarkerLoc = tableElement.children[positions.row].children[positions.column].id;
        let nextMarkerLoc = tableElement.children[positions.nextRow].children[positions.nextColumn].id;
        console.log("Current Marker Loc: " + currentMarkerLoc);
        console.log("Next Marker Loc: " + nextMarkerLoc); */

        check = isMovePossible(tableElement, direction, positions, i);

        if (check === 1) {
            counter++;

        } else if (check === 2) {
            console.log("Can't move - Abort mark counter");
            break;
        }
        //Checks
        /* console.log("COUNTER: " + counter);
        console.log("Marker length: " + markerLength);
        console.log("i value: " + i); */
    }

    if (counter === markerLength) {
        performMovement(tableElement, markerMovement);
        return false;
    } else if (check === 2) {
        //Don't perform movement, but don't reset either
        return false;
    } else {
        console.log("CANNOT MOVE")
        return true;
    }



    //IS BOTTOM LIMIT HIT? return true;
    //return true;
}

const markerScanner = (tableElement) => {

    let rowLength = tableElement.children.length;
    let columnLength = tableElement.children[1].children.length

    markerLocation.rows = [];
    markerLocation.columns = [];

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < columnLength; j++) {
            if (tableElement.children[i].children[j].className === "marked") {
                //console.log("WE MARKED");
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
        touchBottomLimit = false;
    }





}