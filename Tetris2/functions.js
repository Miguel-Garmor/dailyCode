//Functions

const objectContainerGenerator = (tableEl, height, width, startLoc, correction) => {

    let startCorrection = startLoc - correction;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            tableEl.children[i].children[startCorrection + j].classList.add("objectContainer");
            objectContainer.rows = [...objectContainer.rows, i];
            objectContainer.columns = [...objectContainer.columns, startCorrection + j];
        }
    }


}

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

    objectContainer.markerLength = 4;
    objectContainer.rows = [];
    objectContainer.columns = [];


    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            if (tableEl.children[startRow + i].children[startColumn + j - 1].classList.contains("bottom-limit")) {
                console.log("Abort SQUARE GEN - in squareGenerator");
                return true;
            } else {
                tableEl.children[startRow + i].children[startColumn + j - 1].innerText = "X";
                tableEl.children[startRow + i].children[startColumn + j - 1].classList.add("marked");

            }

        }
    }
    objectContainerGenerator(tableEl, 2, 2, startRow, -1);
    return false;
}
const line3Generator = (tableEl) => {
    //Set marker length
    markerLocation.markerLength = 3;

    let startRow = markerLocation.start.row;
    let startColumn = markerLocation.start.column;

    objectContainer.markerLength = 9;
    objectContainer.rows = [];
    objectContainer.columns = [];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 1; j++) {
            if (tableEl.children[startRow + i].children[startColumn + j].classList.contains("bottom-limit")) {
                console.log("Abort line3 GEN - in squareGenerator");
                return true;
            } else {
                tableEl.children[startRow + i].children[startColumn + j].innerText = "X";
                tableEl.children[startRow + i].children[startColumn + j].classList.add("marked");
            }
        }
    }
    objectContainerGenerator(tableEl, 3, 3, startRow, -1);
    return false;
}

const snakeGenerator = (tableEl) => {
    //Set marker length
    markerLocation.markerLength = 4;

    let startRow = markerLocation.start.row;
    let startColumn = markerLocation.start.column;

    objectContainer.markerLength = 9;
    objectContainer.rows = [];
    objectContainer.columns = [];

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            if (tableEl.children[startRow + i].children[startColumn + j - 1].classList.contains("bottom-limit")) {
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

    check = generateObject("line3", tableEl);

    if (check === true) {
        console.log("Abort SQUARE GEN in resetMarker");
        //Clear all information in cells
        restartGame(tableEl);
        //Run resetMarker();
        resetMarker();
    }
    console.log("Finish resetMarker");
}

const lowerRows = (tableElement) => {
    console.log("Run lower rows");

    let rowsLength = clearedRows.length;
    let colMax = boardValues.columns;
    let row = clearedRows;

    for (let rowCounter = 0; rowCounter < rowsLength; rowCounter++) {
        for (let i = row[rowCounter]; i >= 0; i--) {
            for (let j = 0; j < colMax; j++) {
                console.log("row" + i);
                console.log("column" + j);

                if (tableElement.children[i].children[j].classList.contains("bottom-limit")) {
                    tableElement.children[i].children[j].classList.remove("bottom-limit");
                    tableElement.children[i].children[j].innerText = "";
                    tableElement.children[i + 1].children[j].classList.add("bottom-limit");
                    tableElement.children[i + 1].children[j].innerText = "O";

                }
            }
        }
    }
    clearedRows = [];
}

const isRowCompleted = (tableElement) => {

    console.log("Inside IS ROW COMPLETED");

    const colMax = limits.right + 1;
    let counter;
    let clearedRowsCounter = 0;

    let rows = markerLocation.rows;
    let rowsLength = markerLocation.markerLength;

    for (let i = 0; i < rowsLength; i++) {
        counter = 0;
        console.log("Row being checked: " + rows[i]);

        for (let j = 0; j < colMax; j++) {
            console.log("Column being checked: " + j);

            if (tableElement.children[rows[i]].children[j].classList.contains("bottom-limit")) {

                counter++;

                console.log("Counter: " + counter);
                console.log("colMax:" + colMax);

                if (counter === colMax) {

                    for (j = 0; j < colMax; j++) {
                        tableElement.children[rows[i]].children[j].classList.remove("bottom-limit");
                        tableElement.children[rows[i]].children[j].innerText = tableElement.children[rows[i]].children[j].id;
                    }
                    //lowerRows(row, colMax, tableElement);
                    clearedRows[clearedRowsCounter] = rows[i];
                    clearedRowsCounter++;
                }
            }
        }
    }


}

const performMovement = (tableElement, markerMovement, targetObject, targetClass) => {
    console.log("Perform movement: " + targetClass);

    let row = targetObject.rows;
    let column = targetObject.columns;
    let length = targetObject.markerLength;


    //delete old markers
    for (let i = 0; i < length; i++) {

        tableElement.children[row[i]].children[column[i]].classList.remove(targetClass);
        if (targetClass === "marked") {
            tableElement.children[row[i]].children[column[i]].innerText = tableElement.children[row[i]].children[column[i]].id;
        }
    }

    //change marker position
    for (let i = 0; i < length; i++) {
        row[i] += markerMovement.row;
        column[i] += markerMovement.column;
    }


    //add new markers
    for (let i = 0; i < length; i++) {
        /* if (row[i] > limits.bottom || column[i] > limits.right || column[i] < limits.left) {
            console.log("Abort add new marker");
        }  */


        tableElement.children[row[i]].children[column[i]].classList.add(targetClass);
        if (targetClass === "marked") {
            tableElement.children[row[i]].children[column[i]].innerText = "X";
        }

    }

}

const setBottomLimit = (tableElement, rows, columns) => {

    for (let i = 0; i < markerLocation.markerLength; i++) {
        tableElement.children[rows[i]].children[columns[i]].classList.remove("marked");
        tableElement.children[rows[i]].children[columns[i]].classList.add("bottom-limit");
        tableElement.children[rows[i]].children[columns[i]].innerText = "O";
    }
    console.log("All set");

    console.log("Rows: " + objectContainer.rows);
    console.log("Columns: " + objectContainer.columns);
    console.log("Length: " + objectContainer.markerLength)
    //clear objectContainer
    let length = objectContainer.markerLength;
    let containerRows = objectContainer.rows;
    let containerColumns = objectContainer.columns;
    for (let i = 0; i < length; i++) {
        tableElement.children[containerRows[i]].children[containerColumns[i]].classList.remove("objectContainer");
    }
}

const isMovePossible = (tableElement, direction, positions, object) => {
    /* console.log("IS MOVE POSSIBLE: " + object.id); */

    let rows = object.rows;
    let columns = object.columns;
    let nextCell;

    //Initialization: nextCell
    if (tableElement.children[positions.nextRow] === undefined) {
        if (tableElement.children[positions.row].children[positions.nextColumn] === undefined) {
            nextCell = tableElement.children[positions.row].children[positions.column];
        }
    } else {
        nextCell = tableElement.children[positions.row].children[positions.nextColumn];
    }

    switch (direction) {

        case "left-button":

            if (positions.column === limits.left) {
                console.log("ABORT LEFT");
                return 2;
            } else if (positions.column !== limits.left && nextCell.classList.contains("bottom-limit")) {
                console.log("ABORT LEFT - bottom-limit");
                return 2;
            } else {
                console.log("Marker is OK - Continue check");
                return 1;
            }

            break;

        case "down-button":
            console.log("Positions ROW: " + positions.row);
            console.log("Bottom limit: " + limits.bottom);

            if (positions.row === limits.bottom) {

                console.log("Set bottom-limit");
                setBottomLimit(tableElement, rows, columns);
                return 3;

            } else if (positions.row !== limits.bottom && nextCell.classList.contains("bottom-limit")) {
                console.log("Set bottom-limit");
                setBottomLimit(tableElement, rows, columns);
                return 3;
            } else {
                console.log("Marker is OK - Continue check");
                return 1;
            }

            break;

        case "right-button":

            if (positions.column === limits.right) {
                console.log("ABORT RIGHT");
                return 2;
            } else if (positions.column !== limits.left && nextCell.classList.contains("bottom-limit")) {
                console.log("ABORT LEFT - bottom-limit");
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
const loopCheck = (markerLength, object, positions, markerMovement, tableElement, direction) => {


    let evaluate = {
        check: 0,
        counter: 0
    }

    for (let i = 0; i < markerLength; i++) {

        positions.row = object.rows[i];
        positions.column = object.columns[i];

        positions.nextRow = positions.row + markerMovement.row;
        positions.nextColumn = positions.column + markerMovement.column;

        //Is move possible for this marker?
        evaluate.check = isMovePossible(tableElement, direction, positions, object);

        //Move possible for marker being checked
        if (evaluate.check === 1) {
            evaluate.counter++;
        }
        //Move not possible for marker being checked
        else if (evaluate.check === 2) {
            console.log("Can't move - Abort mark counter");
            break;
        }
    }
    return evaluate;
}

const adjustMarkers = (direction, tableElement, object) => {

    let evaluate;

    let markerLength = object.rows.length;

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
    //Attempts move
    moveOnDirection(direction, markerMovement);

    //+-------
    evaluate = loopCheck(markerLength, object, positions, markerMovement, tableElement, direction);
    //--------

    //All markers can move
    if (evaluate.counter === markerLength) {
        //MOVEMENT: object markers
        performMovement(tableElement, markerMovement, markerLocation, "marked");
        //MOVEMENT: object container
        //CHECK objectContainer movement
        if (direction === "down-button") {
            //moveObjectContainer
            performMovement(tableElement, markerMovement, objectContainer, "objectContainer");
        } else if (direction === "left-button" || direction === "right-button") {
            evaluate = loopCheck(objectContainer.markerLength, objectContainer, positions, markerMovement, tableElement, direction);
            if (evaluate.check === 2) {
                console.log("Can't move object container");
            } else if (evaluate.counter === objectContainer.markerLength) {
                performMovement(tableElement, markerMovement, objectContainer, "objectContainer");
            }
        }
        return false;
    }
    //One or more markers can't move
    else if (evaluate.check === 2) {
        //Don't perform movement, but don't reset either
        return false;
    } else {
        //Don't perform movement, and reset markers
        console.log("CANNOT MOVE")
        return true;
    }

}

const markerScanner = (tableElement) => {

    let rowLength = tableElement.children.length;
    let columnLength = tableElement.children[1].children.length

    markerLocation.rows = [];
    markerLocation.columns = [];

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < columnLength; j++) {
            if (tableElement.children[i].children[j].classList.contains("marked")) {
                //console.log("WE MARKED");
                markerLocation.rows = [...markerLocation.rows, i];
                markerLocation.columns = [...markerLocation.columns, j];
                //if cell contains objecContainer class 
                // -save objectContainer positions
            }
        }
    }

}

//Inside:
//--getMarkerLocation
//--adjustMarker
const movementManager = (e) => {

    const tableElement = e.target.parentNode.parentNode.children[0].children[0];

    if (touchBottomLimit === false) {

        markerScanner(tableElement);

        //Set custom values ADJUST MARKER-------------------------------
        touchBottomLimit = adjustMarkers(e.target.id, tableElement, markerLocation);
        //--------------------------------------------------------------

        if (touchBottomLimit === true) {

            isRowCompleted(tableElement);

            if (clearedRows.length > 0) {
                lowerRows(tableElement);
            }

        }


    } else if (touchBottomLimit === true) {

        resetMarker();
        touchBottomLimit = false;
    }





}